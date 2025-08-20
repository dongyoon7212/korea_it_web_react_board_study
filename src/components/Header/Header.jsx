/** @jsxImportSource @emotion/react */
import { LuLogIn, LuUserRoundPlus } from "react-icons/lu";
import * as s from "./styles";
import { Link, useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	const onClickLogoHandler = () => {
		navigate("/");
	};
	return (
		<div css={s.header}>
			<div onClick={onClickLogoHandler}>BOARD</div>
			<div>
				<ul>
					<li>게시판</li>
					<li>
						<Link to={"/write"}>글쓰기</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li css={s.headerIcon}>
						<LuLogIn />
					</li>
					<li css={s.headerIcon}>
						<LuUserRoundPlus />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
