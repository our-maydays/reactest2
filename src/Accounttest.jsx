import { useState } from 'react'

export default function AccountAccordion() {
  const [open, setOpen] = useState({
		groom: false,
		bride: false,
	})

  const toggle = (key) => {
    setOpen((prev) => ({
			...prev,
			[key]: !prev[key],
		}))
  }

	const copy_account = (bank, account) => {
		const text = `${bank} ${account}`
		navigator.clipboard.writeText(text)
		alert('계좌번호가 복사되었습니다')
	}

  const data = [
    {
      key: 'groom',
      title: '신랑측',
      accounts: [
        { name: '강대원', bank: '신한은행', number: '110-000-00000' },
        { name: '노신조', bank: '우리은행', number: '110-000-00000' },
        { name: '강경보', bank: '국민은행', number: '110-000-00000' },
      ],
    },
    {
      key: 'bride',
      title: '신부측',
      accounts: [
        { name: '장상문', bank: '하나은행', number: '110-000-00000' },
        { name: '한현순', bank: '카카오뱅크', number: '110-000-00000' },
        { name: '장유진', bank: '농협', number: '110-000-00000' },
      ],
    },
  ]

  return (
    <div style={styles.wrapper}>
      {data.map((section) => (
        <div key={section.key} style={styles.card}>
          
          {/* 헤더 */}
          <div
            style={styles.header}
            onClick={() => toggle(section.key)}
          >
            <div style={{
							position: 'relative',
							left: '50%',
							transform:'translateX(-50%)'
						}}>{section.title}</div>
						{/*
						<span style={styles.arrow}>
              {openKey === section.key ? '▲' : '▼'}
            </span>
						*/}
						<span>{open[section.key] ? '▲' : '▼'}</span>
          </div>

          {/* 드롭다운 */}
          <div
            style={{
              ...styles.dropdown,
              maxHeight:
                open[section.key]
                  ? section.accounts.length * 58
                  : 0,
            }}
          >
            {section.accounts.map((acc, idx) => (
              <div 
								key={idx} 
								style={styles.row} 
								onClick={()=>
									copy_account(acc.bank, acc.number)
								}
							>
								<div>
									<span> O </span>
 		              <span style={{fontFamily:'Bold'}}>{acc.name}</span>
								</div>
                <span style={styles.account}>
                  {acc.bank} {acc.number}
                </span>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  )
}

/* ---------------- styles ---------------- */

const styles = {
  wrapper: {
    maxWidth: 420,
    width: '70%',
		margin: '0 auto',
		fontSize: '1.6rem',
  },
  card: {
    background: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  header: {
    padding: '1.5rem',
		fontFamily: 'Bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
		height: '15px',
  },
  arrow: {
    fontSize: 14,
  },
  dropdown: {
    overflow: 'hidden',
    transition: 'max-height 0.5s ease',
  },
  row: {
    padding: '1.5rem',
    borderTop: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.6rem',
		height: '1.5rem',
		alignItems: 'center',
  },
  account: {
    color: '#555',
  },
}

