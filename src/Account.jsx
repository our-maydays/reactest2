import { useState } from 'react';
import AccountAccordion from './Accounttest'

const Account = () => {
	
	const [isOpen, setIsOpen] = useState(false)
	const [bank_modal, set_bank_modal] = useState({isopen:false, src:null});


	return (
		<div style={{marginTop: '2rem',marginBottom: '2rem'}}>
			<div className='sub-title' style={{fontWeight:'300'}}>
				ACCOUNT
			</div>
			<div className='div-title' style={{fontWeight:'500'}}>
				마음 전하실 곳
			</div>

			<p style={{fontSize: '1.6rem' ,marginBottom: '1.5rem'}}>
				참석이 어려우신 분들을 위해<br/>
				계좌번호를 기재하였습니다<br/>
				너그러운 마음으로 양해 부탁드립니다
			</p>
			
			<AccountAccordion/>
			
				


		</div>
	)
}

export default Account
					
