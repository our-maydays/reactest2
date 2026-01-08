import wedding from './assets/wedding.png'
import mymap from './assets/map.png'
import Transport from './Transport'


import Map from './Map'

const Navi = () => {
	return (
		<div style={{marginTop: '2rem', marginBottom: '2rem', fontFamily:'GowunDodum'}}>
			<div className='sub-title' style={{fontWeight:'300'}}> Location </div>
			<div className='div-title' style={{fontWeight:'500', marginBottom: '1.5rem'}}>
				오시는 길 
			</div>

{/*
			<img src={wedding} width={'35%'} style={{marginTop:'2%'}} />
			<img src={mymap} width={'90%'} /> <br/>
*/}

				<span style={{fontSize: '1.6rem', fontWeight:'500'}}>
					영도 목장원
				</span>
				<br/>
				<span style={{fontSize: '1.4rem', fontWeight:'500'}}>
					부산광역시 영도구 절영로 355
				</span>
				<br/><br/>
				<span style={{fontSize: '1.1rem', fontWeight:'300'}}>
					051-404-5011
				</span>
				
				<div style={{marginTop: '1.5rem', marginBottom: '1.5rem'}}>
					<Map/>
				</div>

			<Transport 
				tr_type = 'bus'
			/>
		</div>
	)
}

export default Navi
