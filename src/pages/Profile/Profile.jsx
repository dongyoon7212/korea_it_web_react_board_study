/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import profileImg from "../../assets/profileImg.jpg";
import MyBoard from "../../components/MyBoard/MyBoard";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import { useLocation, useNavigate } from "react-router-dom";

function Profile() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	
	const tabClickHandler = (path) => {
		navigate(`${pathname}?tab=${path}`);
	};
	return (
		<div css={s.container}>
			<div css={s.profileContainer}>
				<div css={s.profileHeader}>
					<div css={s.profileImgBox}>
						<div>
							<img src={profileImg} alt="profileImage" />
						</div>
					</div>
					<div css={s.profileInfoBox}>
						<h3>username</h3>
						<div>
							<p>email@naver.com</p>
							<button>인증하기</button>
						</div>
					</div>
				</div>
				<div css={s.profileBox}>
					<div css={s.profileTab}>
						<ul>
							<li>내 게시물</li>
							<li>비밀번호 변경</li>
						</ul>
					</div>
					<div css={s.profileMain}>
						{/* <MyBoard /> */}
						<ChangePassword />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
