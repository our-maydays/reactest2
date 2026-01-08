import silenceFile from './assets/silence.mp3'
import audioFile from './assets/bgm.mp3'
import audioIconOn from './assets/volume_on.png'
import audioIconOff from './assets/volume_off.png'
import { useEffect, useRef, useState } from 'react';

const AudioComp = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const [phase, setPhase] = useState('hidden')

	useEffect( () => {
		setPhase('visible')
		const fadeTimer = setTimeout( () => {
			setPhase('fadeOut')
		}, 2000)

		return () => clearTimeout(fadeTimer)
	}, [])

	
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
		<div style={{
			position: 'relative',
			display:'flex', 
			justifyContent: 'right',
			flexDirection:'row',
			alignItems:'center',
			width:'100%',
			}}
		>
			<span
				class='disappear'
				style={{
					fontSize: '1.6rem',
					height: '25px',
					display:'flex',
					alignItems: 'center',
					justifyContent:'center',
					padding: '0',
					margin: '0',
					marginTop: '10px',
					marginRight: '80px',
					width: '200px',
					position: 'absolute',
					left: '50%',
					transform: 'translate(-50%,0)',
				}}
			>
				배경음악이 준비되어 있습니다
			</span>
			<img
				class='slidedown'
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
