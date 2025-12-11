import { useState, useEffect, useRef} from 'react'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, InfoWindow} from 'react-naver-maps'

const {naver} = window;
const Map = () => {

	useEffect( () => {
		const container = document.getElementById('map')

		const navermaps = useNavermaps()

		const lng = 129.0573867
		const lat = 35.0716472


		const position = new naver.maps.LatLng(lat, lng)
		
		const mapOptions = {
			center: position,
			zoom: 17,
			minZoom: 6,
			zoomControl: false,
			zoomControlOptions: {
				position: navermaps.Position.TOP_RIGHT
			},
		}

		const map = new naver.maps.Map(container, mapOptions)

		const markerOptions = {
			position: position.destinationPoint(90,15),
			map: map,
		}

		const marker = new naver.maps.Marker(markerOptions)
		
		const infoContent = [
			'<div class="iw_inner">',
			'	<h3> 목장원 </h3>',
			'	<p> 부산시 영도구 목장원 </p>',
			'</div>',
		].join('')

		const infowindow = new naver.maps.InfoWindow({
			content: infoContent
		})

		naver.maps.Event.addListener(marker, 'click', function(e) {
			if (infowindow.getMap()) {
				infowindow.close();
			} else {
				infowindow.open(map, marker)
			}
		})

	}, [])

	return (
		<div>
			<div id='map' style={{width:'80%', height:'300px',margin: 'auto'}}> </div>
		</div>
	)
}

	

export default Map
