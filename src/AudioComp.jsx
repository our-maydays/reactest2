import silenceFile from './assets/silence.mp3'
import audioFile from './assets/bgm.mp3'
import audioIconOn from './assets/volume_on.png'
import audioIconOff from './assets/volume_off.png'
import { useEffect, useRef, useState } from 'react';

const AudioComp = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	
	useEffect( () => {
		const audio = new Audio(audioFile)

		audioRef.current = audio
		audioRef.current.load()
		audioRef.current.addEventListener('ended', () => setIsPlaying(false))
		audioRef.current.play().then( () => {
			console.log('silence autoplay success')
			console.log(isPlaying)

			audio.src = audioFile
			audio.play()
			setIsPlaying(true)
		}).catch(() => {
			console.log('autoplay.blocked')
		})
		{/*
		const handleScrollStart = () => {
			if (!isPlaying) {
				audioRef.current.play().catch( () => {} )
				setIsPlaying(!isPlaying)
				window.removeEventListener('scroll',handleScrollStart)
				console.log('scroll detect')
				window.removeEventListener('gesture',handleScrollStart)
				console.log('gesture detect')
				window.removeEventListener('touchstart',handleScrollStart)
				console.log('touch detect')
			}
		}
		window.addEventListener('scroll',handleScrollStart)
		window.addEventListener('gesture',handleScrollStart)
		window.addEventListener('touchstart',handleScrollStart)

		return () => {
			window.removeEventListener('scroll',handleScrollStart)
			window.removeEventListener('gesture',handleScrollStart)
			window.removeEventListener('touchstart',handleScrollStart)
		}
		*/}
	}, [])

	const handleAudioToggle = () => {
		if (isPlaying) {
			audioRef.current.pause()
			console.log('audio pause')
		} else {
			audioRef.current.play();
			console.log('audio start');
			console.log(audioRef.current.play())
		}
		setIsPlaying(!isPlaying)
	}
	
	useEffect( () => {
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current = null;
			}
		}
	}, [])


	return (
		<div style={{display:'flex', justifyContent: 'right',flexDirection:'row',alignItems:'center'}}>
			<span
				class='disappear'
				style={{
					fontSize: '1.6rem',
					height: '25px',
					display:'flex',
					alignItems: 'center',
					padding: '0',
					margin: '0',
					marginTop: '10px',
					marginRight: '80px',
				}}
			>
				배경음악이 준비되어 있습니다
			</span>
			<img
				src={isPlaying ? audioIconOn : audioIconOff}
				width={'25px'}
				style={{marginRight: '10px', marginTop: '10px', }}
				onClick={() => handleAudioToggle()}
			/>
		</div>
	)

	{/*
	return(
		<>
			<iframe src={silenceFile} allow='autoplay' id='audio'>
			</iframe>
			<audio id='audio' autoPlay>
			<source src={audioFile}/>
			</audio>

		</>
	)
*/}

}

export default AudioComp
