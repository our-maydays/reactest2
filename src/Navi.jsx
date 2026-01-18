import Transport from './Transport'
import './App.css'

import Route from './Route'
import Map from './Map'

const Navi = () => {
	return (
		<div className='content-box'>

			<div className='space-box'/>

			<div className='sub-title'> L O C A T I O N </div>
			<div className='div-title'>
				오시는 길 
			</div>
			<div className='space-box'/>
			<div style={{
				margin: 0,
				padding: 0,
			}}>
				<span className='bold-text' style={{fontSize: '1.6rem', fontFamily: 'bold',}}>
					영도 목장원	오필로스가든
				</span>
				<br/>
				<span style={{fontSize: '1.4rem', color:'#344859'}}>
					부산광역시 영도구 절영로 355
				</span>
				<br/>
				<span style={{fontSize: '1.2rem', color: '#344859'}}>
					051-404-5011
				</span>
			</div>

			<div className='space-box'/>

			<Map/>
			
			<div className='space-box'/>
			<Route/>	
			<div className='space-box'/>
			<Transport/>
			<div className='space-box'/>
		</div>
	)
}

export default Navi
