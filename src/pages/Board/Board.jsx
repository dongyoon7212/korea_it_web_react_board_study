/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardList } from "../../apis/board/boardApis";

function Board() {
	const [boardList, setBoardList] = useState([]);
	const [message, setMessage] = useState("");

	useEffect(() => {
		getBoardList().then((response) => {
			if (response.data.status === "success") {
				setBoardList(response.data.data);
			} else if (response.data.status === "failed") {
				setBoardList([]);
				setMessage(response.data.message);
			}
		});
	}, []);
	return (
		<div css={s.container}>
			<div css={s.listContainer}>
				{boardList.length === 0 ? (
					<p>{message}</p>
				) : (
					<ul>
						{boardList.map((board, index) => {
							const date = board.createDt;
							const formattedDate = date.split("T")[0];
							return (
								<li key={board.boardId}>
									<div>
										<span>{index + 1}</span>
										<strong>{board.title}</strong>
									</div>
									<span>{formattedDate}</span>
								</li>
							);
						})}
					</ul>
				)}
			</div>
			<div>{/* 페이지네이션 */}</div>
		</div>
	);
}

export default Board;
