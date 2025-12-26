import { useEffect, useState, useMemo } from "react";
import Modal from 'react-modal'



import styled from 'styled-components';
import { StSlider, StGallery } from './Styled';

import './gallery.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import closeIcon from './assets/close_icon.png'

import video from './assets/videos/test.mov'


import './Gallery.css'

// src/assets/images에 있는 모든 이미지를 한번에 불러오기
const imagePaths = import.meta.glob('./assets/images/*.{jpg,JPG}', {
	eager: true,
	import: 'default',
});

Modal.setAppElement('#root')

const Gallery = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const images = useMemo( () => {
		return Object.values(imagePaths)
	}, [])

	useEffect( () => {
		document.body.style.overflow = isOpen ? "hidden" : 'auto';
	}, [isOpen])

	const openModal = (index) => {
		console.log('index' , index)
		setCurrentIndex(index);
		setIsOpen(true);
	}

	const gridSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		rows: 2,
		arrows: false,
	}

	const modalSettings = (startIndex) => ({
		initialSlide: startIndex,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
	})

	return (
		<div style={{
			border: 'none',
			marginTop: '2rem',
			marginBottom: '2rem',
			fontFamily: 'GowunDodum',
		}}>
		<div style={{fontWeight:'300',marginBottom:'2rem'}}>
			<span className='sub-title'> Gallery </span><br/>
			<span className='div-title' style={{fontWeight:'500'}}> 사진첩</span>
		</div>
		 	<Slider {...gridSettings}>
				{images.map( (src, index) => (
					<div 
						key={index} 
						onClick={ (e) => {
							openModal(index) 
						}}
					>
						<div className='grid-item'>
							<img
								src={src}
								style={{
									width: '100%',
								}}
							/>
						</div>
					</div>
				))}
			</Slider>

			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(100,100,100,0.8)',
						zIndex: 1000,
					},
					content: {
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						background: 'none',
						width: '95vw',
						height: '95vh',
						margin: '0 auto',
						padding: '10px',
						border: 'none',
						overflow: 'hidden',
					},
				}}
				>
					<div className='modal-container'>
						<Slider {...modalSettings(currentIndex)} key={currentIndex}>
							{images.map( (src, index) => (
								<div key={index} className='modal-slide'>
									<img
										src={src}
										alt=''
										className='modal-image'
									/>
								</div>
							))}
						</Slider>
				
						<button
							onClick={ () => setIsOpen(false)}
							style={{
								position: 'absolute',
								top: '1rem',
								right: '1rem',
								background: 'transparent',
								color: 'white',
								fontSize: '1.6rem',
								border: 'none',
								cursor: 'pointer',
								margin: '0',
								padding: '0',
							}}
						>
							<img src={closeIcon} width='25rem'/>
						</button>

					</div>
				</Modal>
		</div>
	)
}

export default Gallery

