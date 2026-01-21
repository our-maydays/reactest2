//import myVideo from './assets/videos/test.mov'
//import myPoster from './assets/videos/test.png'

const myVideo = `${import.meta.env.BASE_URL}video/test.mov`
const myPoster = `${import.meta.env.BASE_URL}video/test.png`

import {useRef} from 'react'
import './App.css'
import './Video.css'

const Video = () => {

	const videoRef = useRef(null)
	
	const togglePlay = () => {
		const video = videoRef.current
		if (!video) return

		if (video.paused) {
			video.play()
		} else {
			video.pause()
		}
	}

	return (
		<div className='content-box'>
			<div className='space-box'/>
			<div className='space-box'/>
			<div className='sub-title'>
				V I D E O
			</div>
			<div className='div-title'>
				웨딩비디오
			</div>
			<div className='space-box'/>

			<div className='video-wrapper'
				style={{
					margin: '0 auto',
					padding: 0,
					width: '90%',
					height: '100%',
				}}
			>
				<video 
					ref={videoRef}
					id='myVideo' 
//					poster={myPoster}
					preload='auto'
					src={myVideo}
					controls
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</div>
			<div className='space-box'/>
			<div className='space-box'/>
		</div>
	)
}

export default Video
