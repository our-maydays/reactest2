import myVideo from './assets/videos/test.mov'
import myPoster from './assets/videos/test.png'

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
			<div className='space-box'/>
			<div className='sub-title'>
				V I D E O
			</div>
			<div className='div-title'>
				웨딩비디오
			</div>
			<div className='space-box'/>

			<video 
				ref={videoRef}
				id='myVideo' 
				width='90%' 
				poster={myPoster}
				src={myVideo}
				controls
			/>
			<div className='space-box'/>
		</div>
	)
}

export default Video
