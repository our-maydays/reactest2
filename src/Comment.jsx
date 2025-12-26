import styled from 'styled-components';
import { useState, useEffect, useCallback, useRef } from 'react';
import moment from 'moment'
import 'moment/dist/locale/ko'

import sendIcon from './assets/send_icon.png'

import { collection, doc, addDoc, getDocs, orderBy, query, limit } from 'firebase/firestore'
import { db } from './firebase'

import {StBarText, StEntireDiv, StInputDiv, StNameInput, StContentInput, StSubmitButton} from './Styled'

import {StCommentName, StCommentDate, StCommentContent, StDisplay} from './Styled'

const Comment = () => {

	moment.locale('ko')

	const [name, setName] = useState('')
	const [content, setContent] = useState('')
	const [comments, setComments] = useState([])
	const [querySnapshot, setQuerySnapshot] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const scrollRef = useRef(null);

	const onChangeNameHandler = (e) => {
		setName(e.target.value)
	}

	const onChangeContentHandler = (e) => {
		setContent(e.target.value)
	}

	const fetchData = async (newLimit) => {
		setIsLoading(true)
		const querySnapshot = await getDocs(
			query(
				collection(db, 'comment'),
				orderBy('createdAt','desc'),
				limit(newLimit)
			)
		)
		setQuerySnapshot(querySnapshot)
		setIsLoading(false)
	}

	const loadMoreData = () => {
		if (!isLoading) {
			const newLimit = querySnapshot.docs.length + 5
			fetchData(newLimit)
		}
	}


	useEffect( () => {
		fetchData(10);
	}, [])


	useEffect( () => {
		const div = scrollRef.current
		if (!div) return;
		div.addEventListener('scroll',handleScroll)
		return () => {
			div.removeEventListener('scroll',handleScroll)
		}
	}, [querySnapshot])

	const onClickSubmitHandler = async () => {
		const createdAt = new Date()
		const validName = name.trim().length > 0
		const validContent = content.trim().length > 0

		if (!validName && !validContent) {
			alert('이름과 메세지를 모두 입력해주세요')
		} else if (!validName) {
			alert('이름을 입력해주세요') 
		} else if (!validContent) {
			alert('메세지를 입력해주세요')
		} else {
			await addDoc(collection(db,'comment'), {
				name: name,
				content: content,
				createdAt: createdAt,
			})

			const newComment = {
				id: comments.length,
				name,
				content,
				createdAt,
			}

			setComments([...comments, newComment])

			const querySnapshot = await getDocs(
				query(collection(db, 'comment'), orderBy('createdAt','desc'))
			)
			setQuerySnapshot(querySnapshot)

			setName('')
			setContent('')
		}
	}



	const handleScroll = () => {
		const div = scrollRef.current;
		if (!div) return;
		const scrollTop = div.scrollTop
		const clientHeight = div.clientHeight;
		const scrollHeight = div.scrollHeight;

		if (-scrollTop + clientHeight >= scrollHeight - 50) {
			console.log(div.scrollBottom)
			console.log(scrollTop)
			console.log(clientHeight)
			console.log(scrollHeight)
			loadMoreData();
		}


	}


	return (
		<div style={{
			maginTop: '2.0rem',
			marginBottom: '2.0rem',
			display: 'flex', 
			flexDirection:'column',
			alignItems:'center',
			fontFamily:'Easta',
			fontWeight:'300',
		}}>
			<div className='sub-title'>
				Gusetbook
			</div>
			<div className='div-title' style={{fontWeight:'500'}}>
				방명록
			</div>

			<StEntireDiv>
				<StInputDiv>
					<StNameInput
						placeholder='이름'
						onChange={onChangeNameHandler}
						value={name}
					></StNameInput>
				
					<span style={{display: 'flex', marginTop:'0', alignItems: 'flex-end'}}>
					<StContentInput
						rows='1'
						placeholder='메세지를 작성해주세요'
						onChange={onChangeContentHandler}
						value={content}
					></StContentInput>

					<StSubmitButton onClick={onClickSubmitHandler}>
						<img src={sendIcon} width='100%'/>
					</StSubmitButton>
					</span>
				</StInputDiv>

				<hr style={{width: "80%"}} />

				<div ref={scrollRef} 
					style= {{
						display: 'flex',
						flexDirection: 'column-reverse',
						overflowY: 'scroll',
						width: '100%',
						height: '399px',
					}}
				>

					{querySnapshot &&
						[...querySnapshot.docs].map( (doc) => (
							<div key={doc.id}>
									<StCommentName> {doc.data().name} </StCommentName>
									
									<div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
										<StCommentContent> {doc.data().content} </StCommentContent>
										<StCommentDate>
											{moment(doc.data().createdAt.toDate()).format('YY.MM.DD')}
											<br/>
											{moment(doc.data().createdAt.toDate()).format('a h:mm')}
										</StCommentDate>
									</div>
							</div>
						))
					}
				</div>
			</StEntireDiv>
		</div>
	)


};

export default Comment
