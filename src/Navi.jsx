import wedding from './assets/wedding.png'
import mymap from './assets/map.png'
import Transport from './Transport'

const Navi = () => {
	return (
		<>
			<h1> Location </h1>
			<img src={wedding} width={'35%'} style={{marginTop:'2%'}} />
			<img src={mymap} width={'90%'} /> <br/>
				주소: 부산광역시 영도구 절영로 355 목장원<br/>
				전화: 051-404-5011<br/><br/>
			<Transport 
				tr_type = 'bus'
			/>
			<Transport
				tr_type = 'car'
			/>
			<Transport 
				tr_type='metro'
			/>
		</>
	)
}

export default Navi
