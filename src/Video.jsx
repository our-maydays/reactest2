import myVideo from './assets/videos/test.mov'
import {useRef} from 'react'

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
		<div style={{marginTop:'2rem', marginBottom:'2rem', fontFamily:'GowunDodum'}}>
			<div className='sub-title' style={{fontWeight:'300'}}>
				Video
			</div>
			<div className='div-title' style={{fontWeight:'500'}}>
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
