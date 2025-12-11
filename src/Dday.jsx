import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'

import moment from 'moment'
import 'moment/dist/locale/ko'

const Dday = () => {
	moment.locale('ko')

	const [left, setLeft] = useState({days:0, hours:0, minutes:0, seconds:0, past:false})

	useEffect( () => {
		const calDaysLeft = () => {
			const today = moment()
			const target = moment('2026-05-09 13:00:00')
//			const target = moment('2025-12-11 20:21:55')
			const diff = moment.duration(target.diff(today))

			if (diff.asMilliseconds() <=0) {
				setLeft({
					days: Math.floor(-diff.asDays()),
					hours: -diff.hours(),
					minutes: -diff.minutes(),
					seconds: -diff.seconds(),
					past: true,
				})
			} else {
				setLeft({
					days: Math.floor(diff.asDays()),
					hours: diff.hours(),
					minutes: diff.minutes(),
					seconds: diff.seconds(),
					past: false,
				})
			}
		}

		calDaysLeft()

		const interval = setInterval(calDaysLeft, 1000);
		return () => clearInterval(interval);
	}, [] );

	return (
		<div style={{width:'70%', margin: 'auto'}}>
			{left.past === true ? (
				<div style={{display:'flex'}}>
					<div className='dday-box'>
						<p className='dday-idx'> 일 </p>
						<p className='dday-num'> {left.days} </p>
					</div>
					<div className='dday-div'>
						<p className='dday-idx'> &nbsp; </p>
						<p className='dday-div'>:</p>
					</div>
					<div className='dday-box'>
						<p className='dday-idx'> 시간 </p>
						<p className='dday-num'> {left.hours} </p>
					</div>
					<div className='dday-div'>
						<p className='dday-idx'> &nbsp; </p>
						<p className='dday-div'>:</p>
					</div>
					<div className='dday-box'>
						<p className='dday-idx'> 분 </p>
						<p className='dday-num'> {left.minutes} </p>
					</div>
					<div className='dday-div'>
						<p className='dday-idx'> &nbsp; </p>
						<p className='dday-div'>:</p>
					</div>
					<div className='dday-box'>
						<p className='dday-idx'> 초 </p>
						<p className='dday-num'> {left.seconds} </p>
					</div>
					<div className='dday-exp'>
						<p className='dday-idx'> &nbsp;  </p>
						<p className='dday-txt'> 지났습니다 </p>
					</div>
				</div>
			) : (
				<div style={{display:'flex'}}>
					<div className='dday-box'>
						<p className='dday-idx'> 일 </p>
						<p className='dday-num'> {left.days} </p>
					</div>
					<div className='dday-div'>
						<p className='dday-idx'> &nbsp; </p>
						<p className='dday-div'>:</p>
					</div>
					<div className='dday-box'>
						<p className='dday-idx'> 시간 </p>
						<p className='dday-num'> {left.hours} </p>
					</div>
					<div className='dday-div'>
						<p className='dday-idx'> &nbsp; </p>
						<p className='dday-div'>:</p>
					</div>
					<div className='dday-box'>
						<p className='dday-idx'> 분 </p>
						<p className='dday-num'> {left.minutes} </p>
					</div>
					<div className='dday-div'>
						<p className='dday-idx'> &nbsp; </p>
						<p className='dday-div'>:</p>
					</div>
					<div className='dday-box'>
						<p className='dday-idx'> 초 </p>
						<p className='dday-num'> {left.seconds} </p>
					</div>
					<div className='dday-exp'>
						<p className='dday-idx'> &nbsp; </p>
						<p className='dday-txt'> 남았습니다 </p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Dday



		

