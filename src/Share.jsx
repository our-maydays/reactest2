import './App.css'

const Share = () => {

	const styles = {
		button: {
			width: '5rem',
			margin: '0 auto',
			padding: '0.5rem',
			background: 'rgb(242,238,238)',
			boxShadow: '0 2px 4px rgb(0,0,0,0.1)',
		}
	}

	const url = 'https://our-maydays.github.io/reactest2'
	
	const shareUrl = async() => {
		navigator.clipboard.writeText(url)
		alert('링크가 복사되었습니다')
	}


	return (
		<div className='content-box'>
			<div className='space-box'/>

			<div className='sub-title'> S H A R E </div>
			<div className='div-title'> 공유하기 </div>

			<div className='space-box'/>

			<div style={{
				display:'flex',
				justifyContent: 'center',
				alignItems:'center',
				width: '90%',
				margin: '0 auto',
				padding: 0,
			}}>
				<div style={styles.button}>
					카톡
				</div>

				<div onClick={shareUrl} style={styles.button}>
					링크
				</div>
			</div>

			<div className='space-box'/>
		</div>
	)
}

export default Share
