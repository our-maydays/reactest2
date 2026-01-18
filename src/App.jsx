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
				<div style={{fontSize: '8px' }}>
					build time : {import.meta.env.VITE_BUILD_TIME}
				</div>

				<WeddingDay targetDate='2026-05-09'/>

				<div style={{
					textAlign: 'right', 
					position: 'sticky', 
					top: 0,
					zIndex: 9,
				}}>
					<AudioComp/>
				</div>

				<Intersect className='fade-in' style={{ }}>
					<MainPhoto/>
				</Intersect>
				{/*
				<Intersect className='fade-in' style={{ }}>
					<TopMsg/>
				</Intersect>
				*/}

				<Intersect className='fade-in' style={{ }}>
					<WelcomeMsg/>
				</Intersect>


				<Intersect className='fade-in' style={{ }}>
					<Calendar/>
				</Intersect>

			
				<Intersect className='fade-in' style={{ }}>
					<Navi/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Gallery/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Video/>
				</Intersect>

				<Intersect className='fade-in'>
					<Account/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Comment/>
				</Intersect>


				<Intersect className='fade-in' style={{ }}>
					<Notice/>
				</Intersect>
				
				<Intersect className='fade-in'>
					<GuestSnap/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Share/>
				</Intersect>
			
			</div>
		</>
	)
}

export default App
