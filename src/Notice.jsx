
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
					width: '90%',
					paddingLeft: '1.6rem',
					paddingRight: '1.6rem',
				}}
			>
				0. 야외에서 예식이 진행됩니다<br/>
				1. 지스트 도도한쭈쭈바에서 축가를 준비해주셨습니다<br/>
				2. 우천시 행사 장소가 실내로 변경될 수 있습니다<br/>
				3. 식사는 본관 4층 컨벤션홀에서 오후 1시부터 가능합니다<br/>
				4. 안녕하세요 <br/>
			</div>
		</div>
	)
}

export default Notice
