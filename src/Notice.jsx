import './App.css'

const Notice = () => {
	return (
		<div className='content-box'>
		{/*
		<div style={{
			marginTop: '2rem',
			marginBottom:'2rem',
			fontFamily:'Regular',
			outline: '1px solid red',
		}}>
		*/}
			<div className='sub-title'>
				N O T I C E 
			</div>
	
			<div className='div-title'>
				안내사항
			</div>

			<div 
				style={{
					fontSize:'1.4rem',
					textAlign: 'left',
					width: '90%',
					margin: '0 auto',
					lineHeight: '2.5rem',
					fontFamily: 'GowunDodum',
				}}
			>
			<span>
				- 예식은 야외에서 진행되오니, 선글라스 지참을 추천드립니다<br/>
				&nbsp;  우천 시 예식 장소는 실내로 변경될 수 있습니다<br/>
				- 식사는 오후 1시부터 본관 4층 컨벤션홀에서 제공합니다<br/>
				- '도도한 쭈쭈바'의 소소한 축하 무대가 준비되어 있습니다<br/>
			</span>
			</div>
		</div>
	)
}

export default Notice
