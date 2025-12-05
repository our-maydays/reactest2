import mainphoto from './assets/images/IMG_0248.jpg'

const MainPhoto = () => {
	return (
		<div style={{position: 'relative'}}>
			<img src={mainphoto} width={'100%'} style={{display: 'block'}} />
			<span 
				style={{
					fontFamily: 'MaruBuriBold',
					fontSize: '15px',
					fontColor: 'black',
					position: 'absolute',
					bottom: '5%',
					left: '2%',
				}}
			>
				Gyeongbo
			</span>
			
			<span 
				style={{
					fontFamily: 'MaruBuriBold',
					fontSize: '15px',
					fontcolor: 'black',
					position: 'absolute',
					bottom: '5%',
					right: '2%',
				}}
			>
				Yujin
			</span>

			
				

			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				height: '10%',
				background: 'linear-gradient(to bottom, rgb(255,255,255) 0%, rgba(255,255,255,0.88) 30%, rgba(255,255,255,0) 100%)',
				filter: 'blur(0px)'
			}}> </div>

			<div style={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				height: '10%',
				background: 'linear-gradient(to top, rgb(255,255,255) 0%, rgba(255,255,255,0.88) 30%, rgba(255,255,255,0) 100%)',
				filter: 'blur(0px)'
			}}> </div>

		</div>
	)
}

export default MainPhoto
