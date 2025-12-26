const Transport = ({tr_type}) => {
	var rev_tr_type = tr_type
	var contents = '';
	if (tr_type === 'bus') {
		rev_tr_type = '셔틀버스 안내사항'
		contents = `부산역 토요코인호텔 앞에서 12시에 출발합니다 <br/>
		나오는 셔틀 버스는 운행되지 않으니 양해부탁드립니다<br/>`
	} else if (tr_type === 'metro') {
		rev_tr_type = '대중교통으로 오시는 분들'
		contents = `지하철 남포역 6번 출구 하차 <br/>
		영도대교에서 버스 환승7, 71, 508번 > 75광장 하차<br/>
		부산역 맞은편 버스 508번 > 75광장`
	} else if (tr_type === 'car') {
		rev_tr_type = '자차로 오시는 분들'
		contents = `목장원 내부에 약 150대 정도 마련되어 있습니다<br/>
		주차 공간이 협소할 수 있으니 양해부탁드립니다<br/>`
	}

	return (
		<div style={{fontFamily:'GowunDodum'}}>
			<div style= {{fontSize: '1.6rem', fontWeight:'500'}}>
				{rev_tr_type}
			</div>
			<div style= {{fontSize: '1.4rem', fontWeight:'300'}}>
				<div dangerouslySetInnerHTML={{__html: contents}} />
			</div>
			<br/>
		</div>
	)
}

export default Transport

