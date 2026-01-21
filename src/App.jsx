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

import WeddingDay from './Weddingday'

import GuestSnap from './GuestSnap'


import { Desktop, Mobile, Tablet, Default } from './Responsive'
import Comment from './Comment'

import Notice from './Notice'
import Video from './Video'

import Share from './Share'

function App() {
	
	const debug = process.env.NODE_ENV === 'development'?'solid':'none';
	return (
		<>
			<div className='main-frame'>
				<WeddingDay targetDate='2026-05-09'/>

				<div style={{
					textAlign: 'right', 
					position: 'sticky', 
					top: 0,
					zIndex: 9,
				}}>
					<AudioComp/>
				</div>

				<Intersect>
					<MainPhoto/>
				</Intersect>
				{/*
				<Intersect className='fade-in' style={{ }}>
					<TopMsg/>
				</Intersect>
				*/}

				<div style={{fontSize: '8px' }}>
					build time : {import.meta.env.VITE_BUILD_TIME}
				</div>


				<Intersect>
					<WelcomeMsg/>
				</Intersect>


				<Intersect>
					<Calendar/>
				</Intersect>

			
				<Intersect>
					<Navi/>
				</Intersect>
				{/*
				<Intersect>
					<Gallery/>
				</Intersect>
				*/}
				<Intersect>
					<Video/>
				</Intersect>

				<Intersect>
					<Account/>
				</Intersect>

				<Intersect>
					<Comment/>
				</Intersect>


				<Intersect>
					<Notice/>
				</Intersect>
				
				<Intersect>
					<GuestSnap/>
				</Intersect>

				<Intersect>
					<Share/>
				</Intersect>
			
			</div>
		</>
	)
}

export default App
