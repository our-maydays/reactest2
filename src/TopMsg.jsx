import './App.css'

const TopMsg = () => {
	return (
		<div className='content-box'>
			<p style={{
				margin: 0,
				padding: 0,
				fontSize: '2rem', 
				fontFamily: 'Bold',
				color: '#3A2665',
//				color: '#672026',
			}}>
				강경보 ·  장유진 

			</p>
		
			{/*
			<p style={{
				fontSize: '2rem',
				fontFamily: 'HappinessBold',
				color: '#672026',
				}}
			>
				강 경 보 &nbsp;&nbsp; & &nbsp;&nbsp;	장 유 진
			</p>
			*/}
{/*
			<p style={{
				fontSize: '1.5rem', 
				marginTop: '0.2rem',
				marginBottom: '0.2rem',
			}} >
				2026년 5월 9일 토요일 오후 1시 
			</p>

			<p style={{
				fontSize: '1.5rem',
				marginTop: '0.2rem',
			}} >
				부산 영도 목장원
			</p>
*/}
		</div>
	)
}

export default TopMsg
