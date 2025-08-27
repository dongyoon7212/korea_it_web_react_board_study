/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { getBoardList } from "../../apis/board/boardApis";

function Board() {
	const [boardList, setBoardList] = useState([]);

	useEffect(() => {
		getBoardList().then((response) => {
			console.log(response);
		});
	}, []);
	return (
		<div css={s.container}>
			<div css={s.listContainer}>
				<ul>
					<li>
						<div>
							<span>1.</span>
							<strong>제목</strong>
						</div>
						<span>2025.08.27</span>
					</li>
					<li>
						<div>
							<span>1.</span>
							<strong>제목</strong>
						</div>
						<span>2025.08.27</span>
					</li>
					<li>
						<div>
							<span>1.</span>
							<strong>제목</strong>
						</div>
						<span>2025.08.27</span>
					</li>
				</ul>
			</div>
			<div>{/* 페이지네이션 */}</div>
		</div>
	);
}

export default Board;
