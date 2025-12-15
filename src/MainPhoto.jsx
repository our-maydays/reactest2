import mainphoto from './assets/images/IMG_0248.jpg'

const MainPhoto = () => {
	return (
		<div style={{position:'relative' }}>
			
			<img src={mainphoto} width={'98%'} style={{display:'block', margin: 'auto'}} />
			
			<div style={{
				border: '2px solid white',
				height:'97%',
				width:  '95%',
				position: 'absolute',
				top: '1%',
				left: '2%',
				}}/>
		</div>
	)
}

export default MainPhoto
