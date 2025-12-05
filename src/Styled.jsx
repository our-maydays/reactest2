import styled from 'styled-components'
import Slider from 'react-slick'

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
	padding: 6px 12px;
	border: 1px dashed brown;
	align-items: center;
	width: 85%;
`;

export const StNameInput = styled.textarea`
	width: 100px;
	height: 20px;
	padding: 6px 12px;
	border: 1px solid green;
`;

export const StContentInput = styled.textarea`
	width: 200px;
	height: 30px;
	padding: 6px 12px;
	border: 2px solid navy;
	background-color: yellow;
	color: black;
`;

export const StSubmitButton = styled.div`
	width: 50px;
	height: 20px;
	padding: 6px 12px;
	border: 2px solid black;
	background-color: red;
`;

export const StInputDiv = styled.div`
	width: 300px;
	heigth: 300px;
	padding: 6px 12px;
	border: 2px solid red;
`;

export const StCommentName = styled.div`
	minimum-width: 50px;
	height: 20px;
	padding: 6px 12px;
	border: 1px solid black;
	text-align: left;
	line-height: 20px;
`;

export const StCommentDate = styled.div`
	width: 145px;
	height: 20px;
	padding: 6px 12px;
	border: 1px solid blue;
	text-align: left;
	line-height: 20px;
`;

export const StCommentContent = styled.div`
	width: 300px;
	minimum-height: 20px;
	border: 1px solid grey;
	padding: 6px 12px;
	text-align: left;
`;

export const StDisplay = styled.div`
	display: flex
	flexDirection: column-reverse;
	overflowY: scroll;
	width: 300px;
	height: 400px;
	border: 1px solid black;
`;

export const StGallery = styled.div`
	border: 1px solid rgb(230,224,255);
	boarderRadius: 12px;
	height: 590px;
	background-color: grey;
	display: block;
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
		bottom: -4%;
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
