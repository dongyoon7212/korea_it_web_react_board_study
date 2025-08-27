import { css } from "@emotion/react";

export const container = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 40px 200px;
	box-sizing: border-box;
`;

export const listContainer = css`
	width: 100%;
	height: 750px;
	box-sizing: border-box;
	border-top: 2px solid #333;
	border-bottom: 2px solid #333;
	box-sizing: border-box;

	& > ul > li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #dbdbdb;
		padding: 0 20px;
		box-sizing: border-box;
		color: #333;

		& > div {
			display: flex;
			gap: 20px;
		}
	}
`;
