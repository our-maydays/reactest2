const Transport = ({tr_type}) => {
	var rev_tr_type = tr_type
	var contents = '';
	if (tr_type === 'bus') {
		rev_tr_type = '셔틀버스'
		contents = `12시 부산역 토요코인호텔1`
	} else if (tr_type === 'metro') {
		rev_tr_type = '대중교통'
		contents = `지하철 남포역 6번 출구 하차 <br/>
		영도대교에서 버스 환승7, 71, 508번 > 75광장 하차<br/>
		부산역 맞은편 버스 508번 > 75광장`
	} else if (tr_type === 'car') {
		rev_tr_type = '자가용'
		contents = `남해고속도로이용시: 남해고속도로>사상IC>구덕터널>부산대교>목장원<br/>
		경부고속도로 이용시: 경부고속도로>구서톨게이트>부두길>목장원`
	}

	return (
		<div>
			<div style= {{fontSize: '16px'}}>
				{rev_tr_type}로 오시는 분들
			</div>
			<div style= {{fontSize: '12px'}}>
				<div dangerouslySetInnerHTML={{__html: contents}} />
			</div>
			<br/>
		</div>
	)
}

export default Transport

