import styled from 'styled-components';
import { useState, useEffect, useCallback, useRef } from 'react';
import moment from 'moment'
import 'moment/dist/locale/ko'

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
		<div style={{display: 'flex', flexDirection:'column',alignItems:'center' }}>
			<StBarText> 축하 메세지를 전해주세요 </StBarText>
			<StEntireDiv>
				<StInputDiv>
					<StNameInput
						placeholder='Name'
						onChange={onChangeNameHandler}
						value={name}
					></StNameInput>
					
					<StContentInput
						placeholder='comment leaves fiorever'
						onChange={onChangeContentHandler}
						value={content}
					></StContentInput>

					<StSubmitButton onClick={onClickSubmitHandler}>
						Save
					</StSubmitButton>
				</StInputDiv>

				<div ref={scrollRef} 
					style= {{
						display: 'flex',
						flexDirection: 'column-reverse',
						overflowY: 'scroll',
						border: '2px solid red',
						width: '350px',
						height: '399px',
					}}
				>

					{querySnapshot &&
						[...querySnapshot.docs].map( (doc) => (
							<div key={doc.id}>
								<div style={{display: 'flex', flexDirection: 'row'}}>
									<StCommentName> {doc.data().name} </StCommentName>
									<StCommentDate>
										
										{moment(doc.data().createdAt.toDate()).format('YY.MM.DD. a h:mm')}
									</StCommentDate>
								</div>
								<StCommentContent> {doc.data().content} </StCommentContent>
							</div>
						))
					}
				</div>
			</StEntireDiv>
		</div>
	)


};

export default Comment
