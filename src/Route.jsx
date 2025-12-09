import React from 'react'

const Route = () => {

	const destLat = 35.0716472
	const destLng = 129.0573867
	const Dest = '영도목장원'

	const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

	const openNaverMap = () => {
		if (isMobile) {
//			const appUrl = `nmap://map?lat=${destLat}&lng=${destLng}&appname=com.example.myapp`
			const appUrl = `nmap://route/car?dlat=${destLat}&dlng${destLng}&dname=${Dest}&appname=com.my.app`
			window.location.href = appUrl
		} else {
			
			const appUrl = `nmap://route/car?dlat=${destLat}&dlng${destLng}&dname=${Dest}&appname=com.my.app`
			const webUrl = 'https:/map.naver.com/'
			console.log({appUrl})
			window.open(webUrl,'_blank');

		}
	}


	return (
		<div>
			<button onClick={openNaverMap}>
				네이버
			</button>
		</div>
	)

}
export default Route

