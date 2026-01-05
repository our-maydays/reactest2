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

import Notice from './Notice'
import Video from './Video'

function App() {
	
	const debug = process.env.NODE_ENV === 'development'?'solid':'none';
	return (
		<>
			<div className='main-frame'>
				<div style={{fontSize: '8px' }}>
					build time : {import.meta.env.VITE_BUILD_TIME}
				</div>

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

				<Intersect className='fade-in' style={{ }}>
					<TopMsg/>
				</Intersect>

				<hr style={{width: '90%'}}/> 

				<Intersect className='fade-in' style={{ }}>
					<WelcomeMsg/>
				</Intersect>

				<hr style={{width: '90%'}}/>

				<Intersect className='fade-in' style={{ }}>
					<Calendar/>
				</Intersect>

				<hr style={{width: '90%'}}/>
			
				<Intersect className='fade-in' style={{ }}>
					<Navi/>
				</Intersect>
				<hr style={{width: '90%'}}/>

				<Intersect className='fade-in' style={{ }}>
					<Gallery/>
				</Intersect>

				<Intersect className='fade-in' style={{ }}>
					<Video/>
				</Intersect>

				<hr style={{width: '90%'}}/>
				
				<Intersect className='fade-in' style={{ }}>
					<Account/>
				</Intersect>

				<hr style={{width: '90%'}}/>

				<Intersect className='fade-in' style={{ }}>
					<Comment/>
				</Intersect>

				<hr style={{width: '90%'}}/>

				<Intersect className='fade-in' style={{ }}>
					<Notice/>
				</Intersect>

				<hr style={{width: '90%'}}/>

				<Intersect className='fade-in' style={{ }}>
					Share
				</Intersect>
			
			</div>
		</>
	)
}

export default App
