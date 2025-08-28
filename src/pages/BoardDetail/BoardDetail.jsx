/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function BoardDetail() {
	return (
		<div css={s.container}>
			<div css={s.boardContainer}>
				<div css={s.boardHeader}>
					<h3>여기는 제목이 들어갈 자리입니다.</h3>
					<span>2025-08-28</span>
				</div>
				<div css={s.boardContent}>여기는 내용이 들어갈 자리입니다.</div>
			</div>
			<div css={s.btnContainer}>
				<button css={s.btn}>목록</button>
				<div>
					<button css={s.btn}>삭제</button>
					<button css={s.btn}>수정</button>
				</div>
			</div>
		</div>
	);
}

export default BoardDetail;
