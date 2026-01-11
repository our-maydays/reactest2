import myVideo from './assets/videos/test.mov'
import {useRef} from 'react'
import './App.css'

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
		{/*
			<div style={{
			marginTop:'2rem', 
			marginBottom:'2rem',
			outline: '1px solid black',
		}}>
		*/}
			<div className='sub-title'>
				V I D E O
			</div>
			<div className='div-title'>
				웨딩비디오
			</div>

			<div>
				<video 
					ref={videoRef}
					id='myVideo' 
					width='90%' 
					src={myVideo}
					controls
				>
				</video>
			</div>
		</div>
	)
}

export default Video
