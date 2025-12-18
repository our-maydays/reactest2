import { useEffect, useState } from "react";
import Modal from './Modal';

import styled from 'styled-components';
import { StSlider, StGallery } from './Styled';

import './gallery.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import closeIcon from './assets/close_icon.png'

import video from './assets/videos/test.mov'


// src/assets/images에 있는 모든 이미지를 한번에 불러오기
const imagePaths = import.meta.glob('./assets/images/*.{jpg,JPG}');


const SliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToscroll: 1,
	arrows: false,
	draggable: true,
	centerMode: true,
	centerPadding: '50px',
}


const Gallery  = ({title}) => {
	const [isMore, set_isMore] = useState(true)
	const [image_modal, set_image_modal] = useState({isopen:false, src:null});
	const open_modal = (src) => {
		set_image_modal({isopen:true, src:src})
	}
	
  const [isflip, set_isflip] = useState(true);
  const [images, set_images] = useState([]);
  const [all_images, set_all_images] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Object.entries(imagePaths).map(([path, importImage]) =>
        importImage().then((module) => ({ path, src: module.default }))
      );
      const loadedImages = await Promise.all(imagePromises);	

			const temp = []
			for (let i = 0; i < loadedImages.length; i+=2) {
				temp.push(loadedImages.slice(i, i+2))
			}
			set_images(temp.slice(0,3));
      set_all_images(temp);
    };

    loadImages();
  }, []);

	const viewMore = () => {
		const row_cnt = isMore ? all_images.length : 3;
		set_images([...all_images].slice(0,row_cnt))
		set_isMore(!isMore)
	}


	return (
    <div style={{marginTop: '2rem', marginBottom:'2rem'}}>
			<div className='sub-title'>
				Gallery
			</div>
			<div className='div-title' style={{fontFamily:'Maruburibold'}}>
				웨딩 갤러리
			</div>
			
			<div className='gallery'>
				{images.map( (row,rowIndex) => (
					<div className='gallery-row' key={rowIndex} 
						style={{
							display: 'flex', 
							gap: '1rem',
							margin: 'auto',
							marginBottom: '1rem',
							justifyContent: 'center',
						}} 
					>
						{row.map( (img,imgIndex)  => (
							<img
								key={imgIndex}
								src={img.src}
								className='gallery-image'
								width='45%'
								onClick= {()=>{open_modal(img.src);document.body.classList.add('modal-open')}}
							/>
						))}
					</div>
				))}
			</div>

			<div
				onClick={ () => {viewMore()}}
				style={{
					display:'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: '1rem',
					marginBottom: '1.5rem',
					fontSize: '1.4rem',
					fontFamily: 'maruburi',
				}}
			>
				{isMore? '더보기' : '접기'}
			</div>

			






			<Modal
				isOpen={image_modal}
				onClose={() => {
					set_image_modal({isopen:false, src:null}); 
					document.body.classList.remove('modal-open')
				}}
				mystyle={{backgroundColor:'rgb(0,0,0)'}}
			>
				<div style={{display:'flex', justifyContent:'center'}}>
					<img
						onClick={ ()=> {
							set_image_modal({isopen:false, src:null})
							document.body.classList.remove('modal-open')
						}}
						style={{
							position:'absolute',
							top: '1rem',
							right: '1rem',
							width: '2rem',
							height: '2rem',
							cursor: 'pointer',
							backgroundColor: 'white',
							borderRadius: '100%',
						}}
						src={closeIcon}
					/>
					<img src={image_modal.src} width={'100%'}/>
				</div>
			</Modal>
		</div>
	)
}

export default Gallery;
