import styled from 'styled-components'
import Slider from 'react-slick'
import {useRef, useState} from 'react'

export const MainPhotoDisplay = styled.div`
	

`;

export const StBarText = styled.div`
	width: 200px;
	height: 20px;
	font-size: 15;
	padding: 6px 12px;
	align-items: center;
	textAlign: center;
`;

export const StEntireDiv = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	width: 90%;
	background-color: #8FAFD9;
	border-radius: 1.5rem;
`;

export const StNameInput = styled.textarea`
	display: inline-block;
	font-family: GowunDodum;
	font-size: 1.6rem;	
	width: 8rem;
	height: 1.6rem;
	line-height: 1.6rem;
	padding: 0.5rem;
	color: black;
	background-color: #F2F1EB;
	border-radius: 0.8rem;
	border: none;
	margin-bottom: 0rem;
	margin-left: 0.5rem;
	&:focus {
		outline: none;
	}
`;

export const StContentInput = styled.textarea`
	display: inline-block;
	font-size: 1.6rem;
	font-family: GowunDodum;
	padding: 0.5rem;
	margin: 0rem 0.2rem 0.5rem 0.5rem;
	width: 29rem;
	line-height: 1.6rem;
	field-sizing: content;
	min-height: 1.6rem;
	max-height: 7rem;
	border: none;
	border-radius: 0.8rem;
	background-color: #F2F1EB;
	color: black;
	&:focus {
		outline: none;
	}
`;

export const StSubmitButton = styled.div`
	display: inline-block;
	width: 1.6rem;
	font-size: 1.6rem;
	height: 1.6rem;
	line-height: 1.6rem;
	padding: 0.5rem;
	margin: 0.5rem;
	margin-top: 0rem;
	border: 1px solid black;
	border-radius: 35%;
	background-color: white;
`;

export const StInputDiv = styled.div`
	padding: 0.5rem;
	width: auto;
	heigth: auto;
	display: inline-block;
	margin: 0rem;
	text-align: left;
	
`;

export const StCommentName = styled.div`
	height: 1.5rem;
	max-width: 10rem;
	font-size: 1.2rem;
	font-family: maruburibold;
	line-height: 1.5rem;
	padding: 0.1rem 0.5rem 0.1rem 0.5rem;
	text-align: left;
	margin: 0.5rem 0.5rem 0rem 0.8rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const StCommentDate = styled.div`
	min-width: 4.5rem;	
	height: 1.5rem;
	padding: 0.1rem 0.5rem  0.1rem 0.5rem;
	text-align: left;
	line-height: 1.2rem;
	font-size: 1.rem;
	margin: 0.5rem 0.5rem 0.8rem 0.2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const StCommentContent = styled.div`
	display: inline-block;
	float: left;
	min-height: 1.5rem;
	font-size: 1.4rem;
	margin: 0.1rem 0.2rem 0.8rem 0.8rem;
	padding: 0.5rem;
	text-align: left;
	border-radius: 1.0rem;
	background-color: #F2F1EB;
`;

export const StDisplay = styled.div`
	display: flex
	flexDirection: column-reverse;
	overflowY: scroll;
	width: 300px;
	height: 400px;
	border: 1px solid red;
`;

export const StGallery = styled.div`
	border: 1px solid rgb(230,224,255);
	boarderRadius: 12px;
	margin: auto;
	width: 98%;
	height: auto;
	background-color: white;
	display: block;
	border: none;
	margin-top: 1.5rem;
	margin-bottom: 2.0rem;
	`;

export const StSlider = styled(Slider)`


	img {
		width: 95%;
		margin: auto;
	}


	//arrows
	.slick-arrow {
		display: block;
		position: absolute;
		width: 10px;
		z-index: 5;
		height: 10px;			
	}
	
	.slick-prev {
		top: 101%;
		left: 5%;
	}				 
	
	.slick-next {
		top: 101%;
		right: 8%;
	}
				
	 //dots
	.slick-dots {
		left: 50%;
		bottom: -2.0rem;
		width: auto;
		padding: 0px 10px;
		background-color: none;
		border-radius: 10.5px;
		transform: translate(-50%,0);

		li {
			width: 15px;
			height: 15px;
			margin: 0;

			&: last-of-type {
				margin-left: 0px;
			}

		button {
			width: 100%
			height: 100%
			padding: 0;
				
				&::before {
					width: 100%;
					height: 100%;
					position: static;
					top: auto;
					left: auto;
					right: auto;
				}
			}
		}
	}
`;
