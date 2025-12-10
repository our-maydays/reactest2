import React from 'react'
import moment from 'moment'
import 'moment/dist/locale/ko'

const Route = () => {

	moment.locale('ko')
	
	const current = import.meta.env.VITE_BUILD_TIME

	const destLat = 35.0716472
	const destLng = 129.0573867
	const destName = '영도목장원'

	const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)


	const openNaverMap = () => {
		if (isMobile) {
			const appUrl = `nmap://route/car?dlat=${destLat}&dlng=${destLng}&dname=${destName}&appname=com.my.app`
			window.location.href = appUrl
			setTimeout( () => {
				window.location.href = 'https://map.naver.com/'
			}, 1500)
		} else {
			const webUrl = 'https:/map.naver.com/'
			window.open(webUrl,'_blank');
		}
	}

	const openKakaoMap = () => {
		if (isMobile) {
			let isAppOpened = false
			const appUrl = `kakaomap://route?ep=${destLat},${destLng}&by=car`
			
			const onVisibilityChange = () => {
				if (document.hidden) {
					isAppOpened = true
					clearTimeout(fallbackTimeout)
					document.removeEventListener('visibilitychange',onVisibilityChange)
				}
			}

			document.addEventListener('visibilitychange',onVisibilityChange)

			const fallbackTimeout = setTimeout( () => {
				if (!isAppOpened) {
					console.log(isAppOpened)
					console.log(document.hidden)
					window.open('https://map.kakao.com')
				}
			}, 1500)

			window.location.href = appUrl;

			console.log('document hidden',document.hidden);
			console.log(isAppOpened)


		} else {
			const webUrl = 'https://map.kakao.com/'
			console.log(document.hidden)
				window.open(webUrl,'_blank')
			console.log(document.hidden)
		}
	}

	const openTMap = () => {
		if (isMobile) {
			const appUrl = `tmap://route?goalname=${destName}&goalx=${destLng}&goaly=${destLat}`
			window.location.href = appUrl
		} else {
			const webUrl = 'https://google.com'
			window.open(webUrl, '_blank')
		}
	}

	return (
		<div>
			<button onClick={openNaverMap}>
				네이버
			</button>
			<button onClick={openKakaoMap}>
				카카오
			</button>
			<button onClick={openTMap}>
			 티맵
			</button>
		</div>
	)

}
export default Route

