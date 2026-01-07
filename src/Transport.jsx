const Transport = ({tr_type}) => {
	var rev_tr_type = tr_type
	var contents = '';
	if (tr_type === 'bus') {
		rev_tr_type = '셔틀버스 안내'
		contents = `부산역 토요코인호텔 앞에서 12시에 출발합니다 <br/>
		나오는 셔틀 버스는 운행되지 않으니 양해부탁드립니다<br/>`
	} else if (tr_type === 'metro') {
		rev_tr_type = '대중교통 안내'
		contents = `어서오세요 <br/>`
	} else if (tr_type === 'car') {
		rev_tr_type = '주차 안내'
		contents = `목장원 내부에 약 150대 정도 마련되어 있습니다<br/>
		주차 공간이 협소할 수 있으니 양해부탁드립니다<br/>`
	}

	return (
		<div style={{fontFamily:'GowunDodum'}}>
			<div style= {{fontSize: '1.6rem', fontFamily:'Bold'}}>
				{rev_tr_type}
			</div>
			<div style= {{fontSize: '1.4rem', fontFamily:'Regular'}}>
				<div dangerouslySetInnerHTML={{__html: contents}} />
			</div>
			<br/>
		</div>
	)
}

export default Transport

