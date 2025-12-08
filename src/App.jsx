import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
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

import { Desktop, Mobile, Tablet, Default } from './Responsive'
import Comment from './Comment'

function App() {
	
	const debug = process.env.NODE_ENV === 'development'?'solid':'none';
	return (
		<>
			<div className='main-frame'>
				
				<Intersect className='fade-in' style={{ }}>
					<Route/>
				</Intersect>

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
					<Gallery/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Navi/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					Map below
					<Map/>
					Map above
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
