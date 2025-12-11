import { useEffect, useState } from "react";
import Modal from './Modal';

import styled from 'styled-components';
import { StSlider, StGallery } from './Styled';

import './gallery.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



// src/assets/images에 있는 모든 이미지를 한번에 불러오기
const imagePaths = import.meta.glob('./assets/images/*.{png,JPG,jpeg,svg,webp}');


const SliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToscroll: 1,
	arrows: true,
	draggable: true,
	centerMode: true,
	centerPadding: '0px',
}


const Gallery  = ({title}) => {
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
			
			set_images(loadedImages);
      set_all_images(loadedImages);
    };

    loadImages();
  }, []);

	return (
    <>
			<div style={{fontFamily:'Maruburi', fontSize:'20px'}}>
				사진첩
			</div>

   		<StGallery>
				<StSlider {...SliderSettings}>

					{images.map( (img, i) => (
						<div key={i} className='slide-container'>
							<img
								key={i}
								src={img.src}
								alt=''
								className='slide-image'
								onClick={() => {open_modal(img.src); console.log(img); document.body.classList.add('modal-open')}}
							/>
						</div>	
					))}
						
				</StSlider>
			</StGallery>


			<Modal
				isOpen={image_modal}
				onClose={() => {set_image_modal({isopen:false, src:null}); document.body.classList.remove('modal-open')}}
				mystyle={{backgroundColor:'rgb(0,0,0)'}}
			>
				<div style={{display:'flex', justifyContent:'center'}}>
					<img src={image_modal.src} width={'100%'}/>
				</div>
			</Modal>
		</>
	)
}

export default Gallery;
