import styled from 'styled-components'

export const MainPhotoDisplay = styled.div`
	

`;

export const StBarText = styled.div`
	width: 200px;
	height: 20px;
	font-size: 15;
	padding: 6px 12px;
	border: solid;
	align-items: center;
	textAlign: center;
`;

export const StEntireDiv = styled.div`
	display: flex;
	flex-direction: column-reverse;
	padding: 6px 12px;
	border: 5px dashed brown;
	align-items: center;
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
	border: 3px solid grey;
	padding: 6px 12px;
	text-align: left;
`;

export const StDisplay = styled.div`
	display: flex
	flexDirection: column-reverse;
	overflowY: scroll;
	width: 300px;
	height: 400px;
	border: 2px solid red;
`;
