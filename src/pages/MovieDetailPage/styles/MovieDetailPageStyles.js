import styled from "styled-components";

export const DetailPageContainer = styled.div`
	display: block;
	width: 78vw;
	margin: 0 auto;
`
export const Breadcrumb = styled.div`
	padding-top: 16px;
	padding-bottom: 16px;
	font-family: "Poppins", sans-serif;
	color: #808080;
	text-decoration-line: none;
	.breadcrumb {
		color: #808080;
	}

	.breadcrumb-active {
		color: #808080;
		text-decoration-line: none;
	}

	.breadcrumb-arrow {
		margin-left: 10px;
		margin-right: 10px;
	}
`;
export const DetailPage = styled.div`
	background-color: #f8f8ff;
	display: flex;
`;

export const DetailMovie = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export const Image = styled.div`
	width: 100%;

	@media only screen and (min-width: 768px) {
		width: 40%;
	}
`;

export const ContentMovie = styled.div`
	font-family: "Poppins", sans-serif;

	.information-movie {
		display: flex;
		margin-top: 8px;
		.information {
			padding-right: 35px;
			color: #808080;
			font-size: 16px;
			font-weight: bold;
		}
		.icon {
			color: #f3f31d;
			margin-right: 5px;
		}
	}
	.plot {
		color: #808080;
		font-size: 14px;
		margin-top: 16px;
		line-height: 1.5;
	}
	@media only screen and (min-width: 768px) {
		margin-left: 24px;
	}
`;

export const Title = styled.div`
	color: #000000;
	font-size: 30px;
	font-weight: bolder;
`;

export const NoData = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;
	font-size: 30px;
	font-family: "Poppins", sans-serif;
	color: #808080;
`;
