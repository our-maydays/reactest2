import React from 'react'
import { useState } from 'react'
import moment from 'moment'
import 'moment/dist/locale/ko'

import nmapIcon from './assets/nmap.png'
import kmapIcon from './assets/kmap.png'
import tmapIcon from './assets/tmap.jpeg'

const Route = () => {

	moment.locale('ko')
	const [locat, setLocat] = useState({lat:'null',lng:'null'})
	const [error, setError] = useState('')

	const getLocation = () => {
		return new Promise((resolve, reject) => {
			if (!navigator.geolocation) {
				alert('위치 정보가 지원되지 않음')
				return
			}

			navigator.geolocation.getCurrentPosition( (position) => {
				const coords = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				}
				resolve(coords)
				console.log('Get position')
				}, (err) => reject(err) 
			)
		})
	}


	const current = import.meta.env.VITE_BUILD_TIME

	const destLat = 35.0716472
	const destLng = 129.0573867
	const destName = '영도목장원'

	const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
	const isIos = /iPhone|iPad/i.test(navigator.userAgent)
	const isAndroid = /Android/i.test(navigator.userAgent)

	const openNaverMap = async () => {
		try {
			const locat=	await getLocation()
		} catch (e) {
			console.error(e);
		}
		console.log({locat})
		if (isMobile) {
//			const appUrl = `nmap://route/car?dlat=${destLat}&dlng=${destLng}&dname=${destName}&appname=com.my.app`

			const appUrl = `nmap://place?lat=${destLat}&lng=${destLng}&name=${destName}&appname=com.my.app`
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
//			const appUrl = `kakaomap://route?ep=${destLat},${destLng}&by=car`
//			const appUrl = `https://map.kakao.com/link/map/${destName},${destLat},${destLng}`
			const appUrl = 'kakaomap://place?id=1432444585'
			console.log('try open kakao')
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
			const webUrl = 'https://m.map.kakao.com/scheme/place?id=1432444585/'
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
		<div style={{
			fontSize:'1.5rem', 
			display: 'flex', 
			justifyContent:'space-between', 
			width: '80%',
			margin: 'auto',
			marginTop: '1rem',
		}}>
			<div style={{
				fontSize: '1.5rem',
				lineHeight: '3rem',
				display: 'flex',
				alignItems: 'center',
				width: '9rem',
				textAlign: 'center',
				}}
				onClick={openNaverMap}
			>
				<img src={nmapIcon}
					style={{
						height: '3rem',
						display: 'inline-block',
						marginRight: '1rem',
						}} 
				/>
				네이버
			</div>

			<div style={{
				fontSize: '1.5rem',
				lineHeight: '3rem',
				display: 'flex',
				alignItems: 'center',
				width: '9rem',
				textAlign: 'left',	
				}}
				onClick={openKakaoMap}
			>

				<img src={kmapIcon}
					style={{
						height: '3rem',
						display: 'inline-block',
						marginRight: '1rem',
					}}
				/>
				카카오
			</div>

			<div style={{
				fontSize: '1.5rem',
				lineHeight: '3rem',
				display: 'flex',
				alignItems: 'center',
				width: '9rem',
				justifyContent:'center',
				textAlign: 'left',
				}}
				onClick={openTMap}
				>

				<img src={tmapIcon}
					style={{
						height: '3rem',
						display: 'inline-block',
						marginRight: '1rem',
					}}
				/>
				<span> 티맵</span>
			</div>
		</div>
	)

}
export default Route

