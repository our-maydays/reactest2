

const WelcomeMsg = () => {
	return (
		<div style={{
			marginTop: '2rem',
			marginBottom: '2rem',
//			color: '#372773',
			color: '#2F2359',
			}}
		>
			<div style={{
				marginBottom: '1rem', 
				fontFamily:'Regular', 
				fontWeight: '300',
				fontSize: '1.6rem',
			}}>
				<span className='sub-title' style={{ }}> Invitation </span><br/>

				<span className='div-title' style={{ }}>

				{/*				소중한 분들을 초대합니다<br/>  */}
				저희만의 작은 축제에 여러분을 초대합니다<br/>
				</span>

				<span style={{lineHeight: '3rem'}}>	
				<br/>
				벚꽃이 지는 봄날, 처음 만난 인연이 <br/>
				4년이 지나 같은 계절에 이르렀습니다 <br/><br/>
				벚꽃이 지고 새싹이 돋아나는 이 순간처럼 <br/>
				닮은 듯 다른 두 사람이 함께 손을 잡고 <br/>
				새로운 시작을 맞이하려 합니다<br/><br/>
				이 봄날의 순간을 소중한 분들과 <br/>
				함께 기억하고 싶습니다<br/>
				</span>
				<br/>
			</div>

			<div style={{
				marginBottom: '1rem', 
				marginTop: '2.5rem', 
				fontFamily: 'Bold',
				fontWeight: '500',
				fontSize: '1.6rem'
			}}>
				강대원 · 노신조
				<span style={{fontFamily: 'Regular'}}> 의 아들</span>
				<span style={{ }}> 경보 </span><br/>
			</div>

			<div style={{
				marginBottom: '1rem',
				marginTop: '1rem', 
				fontFamily: 'Bold',
				fontWeight: '500',
				fontSize: '1.6rem',
			}}>
				장상문 · 한현순
				<span style={{ fontFamily: 'Regular'}}> 의 딸</span>
				<span style={{ fontWeight: '500'}}> 유진</span><br/>
			</div>
			
		</div>
	)
}

export default WelcomeMsg
