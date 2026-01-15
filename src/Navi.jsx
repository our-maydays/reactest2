import Transport from './Transport'
import './App.css'

import Map from './Map'

const Navi = () => {
	return (
		<div className='content-box'>
		{/*
		<div style={{
			marginTop: '2rem',
			marginBottom: '2rem',
			fontFamily:'Regular',
			outline: '1px solid black',
		}}>
		*/}
			<div className='sub-title'> L O C A T I O N </div>
			<div className='div-title'>
				오시는 길 
			</div>

			<div style={{
				marginTop: '1rem',
				marginBottom: '1rem',
				paddingTop:'1rem',
				paddingBottom: '1rem',
			}}>
				<span className='bold-text' style={{fontSize: '1.6rem', fontFamily: 'bold',}}>
					영도 목장원
				</span>
				<br/>
				<span style={{fontSize: '1.4rem'}}>
					부산광역시 영도구 절영로 355
				</span>
				<br/>
				<span style={{fontSize: '1.2rem'}}>
					051-404-5011
				</span>
			</div>

				<div style={{
					marginTop: '1rem',
					marginBottom: '1rem',
					paddingTop: '1rem',
					paddingBottom: '1rem',
				}}>
					<Map/>
				</div>

			<Transport/>
		</div>
	)
}

export default Navi
