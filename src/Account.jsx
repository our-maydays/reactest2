import { useState } from 'react';
import AccountAccordion from './AccountAccordion'

import './App.css'

const Account = () => {
	
	const [isOpen, setIsOpen] = useState(false)
	const [bank_modal, set_bank_modal] = useState({isopen:false, src:null});


	return (
		<div className='content-box'>
			<div className='space-box'/>

			<div className='sub-title'>
				A C C O U N T
			</div>
			<div className='div-title'>
				마음 전하실 곳
			</div>
			<div className='space-box'/>

			<div style={{
				fontSize: '1.6rem' ,
				margin: 0,
				padding: 0,
			}}>
				참석이 어려우신 분들을 위해<br/>
				계좌번호를 기재하였습니다<br/>
				너그러운 마음으로 양해 부탁드립니다
			</div>
		
			<div className='space-box'/>

			<AccountAccordion sectionKey='groom'/>

			<div className='space-box'/>

			<AccountAccordion sectionKey='bride'/>

			<div className='space-box'/>
			
				


		</div>
	)
}

export default Account
					
