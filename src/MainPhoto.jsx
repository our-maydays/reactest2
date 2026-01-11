import './App.css'

import mainphoto from './assets/images/DSC07876.jpg'

const MainPhoto = () => {
	return (
		<div className= 'content-box'>
			
			<img src={mainphoto} width={'90%'} style={{display:'block', margin: 'auto'}} />
	
			{/*			
			<div style={{
				border: '2px solid white',
				height:'97%',
				width:  '95%',
				position: 'absolute',
				top: '1%',
				left: '2%',
				}}/>
				*/}
		</div>
	)
}

export default MainPhoto
