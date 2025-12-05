import { useEffect, useState } from "react";
import Modal from './Modal';

// src/assets/images에 있는 모든 이미지를 한번에 불러오기
const imagePaths = import.meta.glob('./assets/images/*.{png,JPG,jpeg,svg,webp}');

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

   		<div style={{
				display: 'flex', 
				gap:'8px', 
				margin:'2%',
				border: '1px solid rgb(230,224,255)',
				borderRadius: '12px',
				height:'300px',
				overflowX: 'auto',
				padding: '8px',
				}}
			>

				{images.map( (img, i) => (
					<img
						key={i}
						src={img.src}
						alt=''
						onClick={() => {open_modal(img.src); console.log(img); document.body.classList.add('modal-open')}}
						style={{
							height: '100%',
							width: 'auto',
							cursor: 'pointer',
							borderRadius: '8px',
						}}
					/>
				))}
			</div>


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
