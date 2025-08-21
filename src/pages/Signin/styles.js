import { css } from "@emotion/react";

export const container = css`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 60px 0;
	box-sizing: border-box;
`;

export const box = css`
	width: 400px;
	height: auto;
	/* border: 1px solid #dbdbdb; */
	border-radius: 15px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 30px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const inputBox = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const signinBtnBox = css`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 10px;

	& > button {
		cursor: pointer;
		width: 100%;
		padding: 10px 30px;
		border: none;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 500;
		color: white;
		transition: all 0.1s ease;

		&:hover {
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		}
	}
`;

export const oauthBtnBox = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;

	& > button {
		cursor: pointer;
		width: 100%;
		padding: 10px 30px;
		border: none;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 500;
		color: white;
		transition: all 0.1s ease;

		&:hover {
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
		}
	}
`;
