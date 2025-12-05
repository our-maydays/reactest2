import copyicon from './assets/Copy.png'

const MyBank = ({src}) => {

	const copy_bank = (num) => {
		navigator.clipboard.writeText(num)
		alert('계좌번호가 복사되었습니다')
	}

	const dt = src === 'W' ? {
		//Bride's Account Info
		'Mother' : ['신부측 어머님', '한현순', '우리은행', '111-1111-11111'],
		'Father' : ['신부측 아버님',' 장상문', '우리은행', '222-2222-22222'],
		'Me' : ['신부','장유진', '우리은행', '333-3333-33333'],
	} : {
		//Groom's Account Info
		'Mother' : ['신랑측 어머님','노신조', '우리은행', '111-1111-11111'],
		'Father' : ['신랑측 아버님',' 강대원', '우리은행', '222-2222-22222'],
		'Me' : ['신랑','강경보','우리은행', '333-3333-33333'],
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
			{
				['Mother','Father','Me'].map((key,idx) => {
					return <div key={idx}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							textAlign: 'left',
							borderRadius: '12px',
							padding: '12px',
							margin: '12px',
						}}>

						<div>
							<p style={{fontFamily:'MaruBuriLight', fontSize: '18px', marginTop: '0px'}}>
								{dt[key][0]}
							</p>
							{dt[key][1]} {dt[key][2]} {dt[key][3]}
						</div>

						<div style={{width: '3vw'}}> </div>

						<button
							onClick={() => copy_bank(dt[key][2])}
							style= {{
								backgroundColor: 'rgb(249,245,242)',
								color: 'black',
								border: '1px solid rgb(197,219,238)',
								padding: '6px',
								borderRadius: '5px',
							}}
						>
							<img src={copyicon} width={'12px'} />
							<span style={{marginLeft: '10px', marginRight: '5px'}}>
								COPY
							</span>
						</button>
					</div>
				})
			}
		</div>
	)
}

export default MyBank

