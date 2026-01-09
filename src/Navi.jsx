import wedding from './assets/wedding.png'
import mymap from './assets/map.png'
import Transport from './Transport'


import Map from './Map'

const Navi = () => {
	return (
		<div style={{marginTop: '2rem', marginBottom: '2rem', fontFamily:'Regular'}}>
			<div className='sub-title' style={{ }}> Location </div>
			<div className='div-title' style={{marginBottom: '1.5rem'}}>
				오시는 길 
			</div>

{/*
			<img src={wedding} width={'35%'} style={{marginTop:'2%'}} />
			<img src={mymap} width={'90%'} /> <br/>
*/}
			<div style={{marginTop: '2rem', marginBottom: '2rem'}}>
				<span style={{fontSize: '1.6rem', fontFamily: 'bold',}}>
					영도 목장원
				</span>
				<br/>
				<span style={{fontSize: '1.4rem', fontWeight:'500'}}>
					부산광역시 영도구 절영로 355
				</span>
				<br/>
				<span style={{fontSize: '1.2rem', fontWeight:'300'}}>
					051-404-5011
				</span>
			</div>

				<div style={{marginTop: '2rem', marginBottom: '2rem'}}>
					<Map/>
				</div>

			<Transport/>
		</div>
	)
}

export default Navi
