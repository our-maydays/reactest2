
const Notice = () => {
	return (
		<div style={{
			marginTop: '2rem',
			marginBottom:'2rem',
			fontFamily:'GowunDodum',
			fontWeight:'300',
		}}>
			<div className='sub-title'>
				Notice
			</div>
	
			<div className='div-title' style={{fontWeight:'500'}}>
				안내사항
			</div>

			<div 
				style={{
					fontFamily:'maruburi',
					fontSize:'1.4rem',
					textAlign: 'left',
					width: '85%',
					paddingLeft: '2rem',
					paddingRight: '2rem',
				}}
			>
				1. 예식은 야외에서 진행되오니, 선글라스 지참을 추천드립니다<br/>
				2. 우천 시 예식 장소는 실내로 변경될 수 있습니다<br/>
				3. 식사는 오후 1시부터 본관 4층 컨벤션홀에서 제공합니다<br/>
				4. '도도한 쭈쭈바'의 소소한 축하 무대가 준비되어 있습니다<br/>
			</div>
		</div>
	)
}

export default Notice
