import styled from "styled-components";

export const MoviesListCont = styled.div`
	font-family: "Poppins", sans-serif;
	margin: auto;
    width: 85rem;
`;

export const MoviesItemCont = styled.div`
	height: 420px;
	border-radius: 10px;
	background: white;
	font-family: "Poppins", sans-serif;
	width: 250px;
  flex-direction: column;
  justify-items: center;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const MoviesItemTitle = styled.div`
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-family: "Poppins", sans-serif;
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	max-width: 250px;
	margin-top: 15px;
	padding: 0px 20px 0px 20px;
`;

export const Genre = styled.div`
  font-size: 12px;
  color: #808080;
  display: flex;
  justify-content: center;
`
export const Title = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20px;
	font-family: "Poppins", sans-serif;
`;

export const Movies = styled.div`
    display: flex;
    gap: 16px;
	flex-wrap: wrap;
`;

export const Loading = styled.h4`
	text-align: center;
`