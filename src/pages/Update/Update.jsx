/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardDetail } from "../../apis/board/boardApis";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
	const [newBoardData, setNewBoardData] = useState({});
	const [boardData, setBoardData] = useState({});
	const { boardId } = useParams();
	const navigate = useNavigate();

	const updateOnClickHandler = () => {};

	useEffect(() => {
		getBoardDetail(boardId).then((response) => {
			if (response.data.status === "success") {
				setBoardData(response.data.data);
			} else if (response.data.status === "failed") {
				alert(response.data.message);
				navigate("/board");
			}
		});
	}, [boardId, navigate]);

	return (
		<div css={s.container}>
			<input
				type="text"
				value={boardData.title}
				placeholder="제목을 입력해주세요."
				onChange={(e) => {
					setNewBoardData({ ...newBoardData, title: e.target.value });
				}}
			/>
			<textarea
				name=""
				id=""
				placeholder="내용을 입력해주세요."
				value={boardData.content}
				onChange={(e) => {
					setNewBoardData({
						...newBoardData,
						content: e.target.value,
					});
				}}
			></textarea>
			<div css={s.btnBox}>
				<button onClick={updateOnClickHandler}>수정하기</button>
			</div>
		</div>
	);
}

export default Update;
