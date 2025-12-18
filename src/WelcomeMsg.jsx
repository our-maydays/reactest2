

const WelcomeMsg = () => {
	return (
		<div style={{
			marginTop: '2rem',
			marginBottom: '2rem',
			}}
		>
			<div style={{
				marginBottom: '1rem', 
				fontFamily:'Maruburi', 
				fontSize: '1.6rem',
			}}>
				<span className='sub-title'> INVITATION </span><br/>
				<span className='div-title' style={{fontFamily: 'MaruburiBold'}}>
					소중한 분들을 초대합니다 <br/><br/> 
				</span>
				<span style={{lineHeight: '3rem'}}>	
				살랑이는 바람결에<br/>
				사랑이 묻어나는 계절입니다<br/>
				여기 곱고 예쁜 두 사람이 사랑을 맺어<br/>
				인생의 반려자가 되려 합니다<br/>
				새 인생을 시작하는 이 자리에 오셔서<br/>
				축복해 주시면 감사하겠습니다	
				</span>
			</div>

			<div style={{
				marginBottom: '1rem', 
				marginTop: '2.5rem', 
				fontFamily: 'MaruburiBold',
				fontSize: '1.6rem'
			}}>
				강대원 · 노신조
				<span style={{fontFamily: 'Maruburi'}}> 의 아들</span>
				<span style={{fontFamily: 'MaruburiBold'}}> 경보 </span><br/>
			</div>

			<div style={{
				marginBottom: '1rem',
				marginTop: '1rem', 
				fontFamily: 'MaruburiBold',
				fontSize: '1.6rem',
			}}>
				장상문 · 한현순
				<span style={{fontFamily: 'Maruburi'}}> 의 딸</span>
				<span style={{fontFamily: 'MaruburiBold'}}> 유진</span><br/>
			</div>
			
		</div>
	)
}

export default WelcomeMsg
