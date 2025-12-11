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
	const isIos = /iPhone|iPad/i.test(navigator.userAgent)
	const isAndroid = /Android/i.test(navigator.userAgent)

	const openNaverMap = () => {
		if (isMobile) {
//			const appUrl = `nmap://route/car?dlat=${destLat}&dlng=${destLng}&dname=${destName}&appname=com.my.app`
			const appUrl = `https://map.naver.com/v5/directions/-/${destLat},${destLng},${destName}`
			window.location.href = appUrl
			setTimeout( () => {
				if (!document.hidden) {
					if (isIos) {
						window.location.href = 'https://itunes.apple.com/app/id311867728?mt=8'
					} else if (isAndroid) {
						window.location.href = 'market://details?id=com.nhn.android.nmap'
					} else {
						window.location.href = 'https://map.naver.com/'
					}
				}
			}, 3000)
		} else {
			const webUrl = 'https:/map.naver.com/'
			window.open(webUrl,'_blank');
		}
	}

	const openKakaoMap = () => {
		if (isMobile) {
			const appUrl = `kakaomap://route?ep=${destLat},${destLng}&by=car`
			console.log('try open kakao')
//			window.open(appUrl)
			alert('kakao opening')
			window.location.href = appUrl;
			
			setTimeout( () => {
				if (!document.hidden) {
					console.log('no kakaomap')
					if (isIos) {
						console.log('ios')
						window.open('https://itunes.apple.com/app/id304608425?mt=8')
					} else if (isAndroid) {
						console.log('android')
						window.open('market://details?id=net.daum.android.map')
					} else {
						console.log('else')
						window.location.href = 'https://map.kakao.com/'
					}
				}
			}, 3000);
		} else {
			const webUrl = 'https://map.kakao.com/'
				window.open(webUrl,'_blank')
		}
	}

	const openTMap = () => {
		if (isMobile) {
			const appUrl = `tmap://route?goalname=${destName}&goalx=${destLng}&goaly=${destLat}`
			window.location.href = appUrl
			setTimeout( () => {
				if (!document.hidden) {
					if (isIos) {
						window.location.href = 'https://itunes.apple.com/app/id431589174?mt=8'
					} else if (isAndroid) {
						window.location.href = 'market://details?id=com.skt.tmap.ku'
					} else {
						window.location.href = 'https://google.com/'
					}
				}
			}, 3000)
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

