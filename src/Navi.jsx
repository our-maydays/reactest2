import wedding from './assets/wedding.png'
import mymap from './assets/map.png'
import Transport from './Transport'


import Map from './Map'

const Navi = () => {
	return (
		<>
			<div> Location </div>
			<div style={{
				fontSize: '1.5rem',
				marginBottom: '1.0rem',
				}}
			>
				오시는 길 
			</div>

{/*
			<img src={wedding} width={'35%'} style={{marginTop:'2%'}} />
			<img src={mymap} width={'90%'} /> <br/>
*/}
				<Map/>
				<br/>
			
				<span style={{fontSize: '1.5rem'}}> 
					주소: 부산광역시 영도구 절영로 355 목장원<br/> 
				</span>
				<span style={{fontSize: '1.22rem'}}>
					전화: 051-404-5011<br/><br/>
				</span>

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
