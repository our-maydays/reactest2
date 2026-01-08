const Transport = ({tr_type}) => {

	return (
		<div style={{
			fontFamily:'Regular',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			width: '80%',
			margin: 'auto',
			marginTop: '2rem',
		}}>
			<div style= {{fontSize: '1.6rem', fontFamily:'Bold'}}>
				셔틀버스
			</div>
			<div style= {{fontSize: '1.4rem', fontFamily:'Regular',textAlign:'left'}}>
				부산역 토요코인호텔 앞 12시 출발<br/>
				* 편도 운행
			</div>

			<div style= {{fontSize: '1.6rem', fontFamily:'Bold'}}>
				시내버스
			</div>
			<div style= {{fontSize: '1.4rem', fontFamily:'Regular'}}>
				6번, 7번, 70번, 71번, 508번 / 75광장 하차<br/>
			</div>

			<div style= {{fontSize: '1.6rem', fontFamily:'Bold'}}>
				급행버스
			</div>
			<div style= {{fontSize: '1.4rem', fontFamily:'Regular',textAlign:'left'}}>
				3003번(김해공항↔태종도) / 75광장 하차<br/>
				* 사상역 / 파라곤호텔 승차
			</div>

			<div style= {{fontSize: '1.6rem', fontFamily:'Bold'}}>
				주차
			</div>
			<div style= {{fontSize: '1.4rem', fontFamily:'Regular'}}>
				약 150대 가능
			</div>
			<br/>
		</div>
	)
}

export default Transport

