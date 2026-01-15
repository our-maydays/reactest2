import './App.css'
import './WelcomeMsg.css'

const WelcomeMsg = () => {

	return (
		<div className='content-box'>
		{/*			color: '#372773',*/}
			<div className='sub-title' style={{ }}> I N V I T A T I O N </div>

			<div className='div-title'>
				{/*				소중한 분들을 초대합니다<br/>  */}
				저희만의 작은 축제에 여러분을 초대합니다
			</div>

			<div style={{
				lineHeight: '3rem',
				fontSize: '1.6rem',
				paddingTop: '1rem',
				paddingBottom: '1rem',
				margin: 0,
			}}>	
				<br/>
				벚꽃이 지는 봄날, 처음 만난 인연이 <br/>
				4년이 지나 같은 계절에 이르렀습니다 <br/><br/>
				벚꽃이 지고 새싹이 돋아나는 이 순간처럼 <br/>
				닮은 듯 다른 두 사람이 함께 손을 잡고 <br/>
				새로운 시작을 맞이하려 합니다<br/><br/>
				이 봄날의 순간을 소중한 분들과 <br/>
				함께 기억하고 싶습니다<br/><br/>
			</div>

			<div className='box' style={{
				marginTop: '1rem', 
				marginBottom: '0rem',
			}}>
				<div className='parentname'> 강대원 </div>
				<div className='separate'> · </div>
				<div className='parentname'> 노신조 </div>

				<div className='type'> 의</div>
				<div className='sd'> 아들</div>
				<div className='namebox'> 경보 </div><br/>
			</div>

			<div className='box' style={{
				marginBottom: '0rem',
				marginTop: '0rem', 
			}}>
				<div className='parentname'> 장상문 </div>
				<div className='separate'> · </div>
				<div className='parentname'> 한현순 </div>

				<div className='type'> 의</div>
				<div className='sd'> 딸 </div>
				<div className='namebox'> 유진</div><br/>
			</div>
			
		</div>
	)
}

export default WelcomeMsg
