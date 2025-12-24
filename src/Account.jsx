import { useState } from 'react';
import Modal from './Modal';
import MyBank from './Bank';

const Account = () => {

	const [bank_modal, set_bank_modal] = useState({isopen:false, src:null});


	return (
		<div style={{marginTop: '2rem',marginBottom: '2rem'}}>
			<div className='sub-title'>
				Account
			</div>
			<div className='div-title'>
				마음 전하실 곳
			</div>

			<p style={{fontSize: '1.4rem' ,marginBottom: '1.5rem'}}>
				참석이 어려우신 분들을 위해<br/>
				계좌번호를 기재하였습니다<br/>
				너그러운 마음으로 양해 부탁드립니다
			</p>

			<div onClick={() => {set_bank_modal({isopen:true,src:'M'}); document.body.classList.add('modal-open')}} 
				style = {{
					backgroundColor: 'rgb(242,238,238)',
					padding: '12px',
					margin: '12px',
					marginLeft: '20%',
					marginRight: '20%',
					fontSize: '1.6rem',
					borderRadius: '1.6rem',
			}}>
				신랑측 계좌번호
			</div>

			<div onClick={() => {set_bank_modal({isopen:true,src:'W'}); document.body.classList.add('modal-open')}}
				style = {{
					backgroundColor: 'rgb(242,238,238)',
					padding: '12px',
					margin: '12px',
					marginLeft: '20%',
					marginRight: '20%',
					fontSize: '1.6rem',
					borderRadius: '1.6rem',
			}}>
				신부측 계좌번호
			</div>

			<Modal
				isOpen={bank_modal}
				onClose={() => {set_bank_modal({isopen:false, src:null}); document.body.classList.remove('modal-open')}}
				mystyle = {{backgroundColor: 'rgb(255,246,246)'}}
			>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<MyBank src={bank_modal.src}/>
				</div>
			</Modal>

		</div>
	)
}

export default Account
					
