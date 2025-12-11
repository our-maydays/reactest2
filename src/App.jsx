import viteLogo from '/vite.svg'
import './App.css'

import AudioComp from './AudioComp'
import TopMsg from './TopMsg'
import MainPhoto from './MainPhoto'
import WelcomeMsg from './WelcomeMsg'
import Calendar from './Calendar'
import Gallery from './Gallery'
import Navi from './Navi'
import Account from './Account'
import Intersect from './Intersect'

import Map from './Map'

import Route from './Route'
import Dday from './Dday'

import { Desktop, Mobile, Tablet, Default } from './Responsive'
import Comment from './Comment'

function App() {
	
	const debug = process.env.NODE_ENV === 'development'?'solid':'none';
	return (
		<>
			<div className='main-frame'>
				<div style={{fontSize: '8px' }}>
					build time : {import.meta.env.VITE_BUILD_TIME}
				</div>

				<div style={{textAlign: 'right'}}>
					<AudioComp/>
				</div>

				<Intersect className='fade-in' style={{ }}>
					<MainPhoto/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<TopMsg/>
				</Intersect>


				<Intersect className='fade-in' style={{ }}>
					<WelcomeMsg/>
				</Intersect>


				<Intersect className='fade-in' style={{ }}>
					<Calendar/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Dday/>
				</Intersect>

				
				<Intersect className='fade-in' style={{ }}>
					<Gallery/>
				</Intersect>


				<Intersect className='fade-in' style={{ }}>
					<Navi/>
				</Intersect>


				<Intersect className='fade-in' style={{ }}>
					<Route/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Account/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Comment/>
					Message Boad
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					Share
				</Intersect>

			</div>
		</>
	)
}

export default App
