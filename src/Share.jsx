import './App.css'
import mainImg from './assets/heart.png'
import { useEffect } from 'react'


const Share = () => {

	const styles = {
		button: {
			width: '5rem',
			margin: '0 auto',
			padding: '0.5rem',
			background: 'rgb(242,238,238)',
			boxShadow: '0 2px 4px rgb(0,0,0,0.1)',
			borderRadius: '0.8rem',
			cursor: 'pointer',
		}
	}

	const url = 'https://our-maydays.github.io/reactest2'

	
	const shareUrl = async() => {
		navigator.clipboard.writeText(url)
		alert('링크가 복사되었습니다')
	}

	{/*
	Kakao.init('JAVASCRIPT_KEY')
	console.log('kakao ', Kakao.isInitialized())
 	*/}

	useEffect( () => {
		Kakao.cleanup()
		Kakao.init(import.meta.env.VITE_REACT_APP_KAKAO_JAVASCRIPT_KEY);
		console.log(Kakao.isInitialized())
	}, [])

	const kakaoShare = async () => {
		if (!Kakao.isInitialized()) {
			Kakao.init(import.meta.env.VITE_REACT_APP_KAKAO_JAVACRIPT_KEY);
		}

		try {
			Kakao.Share.sendDefault({
				objectType: 'feed',
				content: {
					title: '경보 유진 결혼합니다',
					description: '2026.05.09. 오후 1시</n> 부산 영도 목장원 오필로스가든',
					imageUrl: 'https://github.com/our-maydays/reactest2/blob/main/src/assets/heart.png',
					link: {
						mobileWebUrl: 'https://our-maydays.github.io/reactest2',
						webUrl: 'https://our-maydays.github.io/reactest2',
					},
				},
				buttons: [{
					title:'모바일 청첩장 보기',
					link: {
						mobileWebUrl: 'https://our-maydays.github.io/reactest2',
						webUrl: 'https://our-maydays.github.io/reactest2',
					},
				}],
				installTalk: true,
			})
		} catch (error) {
			console.error(error);
		}
	}





	return (
		<div className='content-box'>
			<div className='space-box'/>
			<div className='space-box'/>

			<div className='sub-title'> S H A R E </div>
			<div className='div-title'> 공유하기 </div>

			<div className='space-box'/>

			<div style={{
				display:'flex',
				justifyContent: 'center',
				alignItems:'center',
				width: '90%',
				margin: '0 auto',
				padding: 0,
			}}>
				<div style={styles.button} onClick={() => {kakaoShare()}}>
					카톡
				</div>
				
				<div onClick={shareUrl} style={styles.button}>
					링크
				</div>
			</div>

			<div className='space-box'/>
			<div className='space-box'/>
		</div>
	)
}

export default Share
