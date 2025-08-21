/** @jsxImportSource @emotion/react */
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";

function Signin() {
	return (
		<div css={s.container}>
			<h1>로그인</h1>
			<div css={s.box}>
				<div css={s.inputBox}>
					<AuthInput type={"text"} placeholder={"아이디"} />
					<AuthInput type={"password"} placeholder={"비밀번호"} />
				</div>
				<div css={s.signinBtnBox}>
					<button style={{ backgroundColor: "#6c757d" }}>
						회원가입
					</button>
					<button style={{ backgroundColor: "#0d6efd" }}>
						로그인
					</button>
				</div>
				<div css={s.oauthBtnBox}>
					<button style={{ backgroundColor: "rgb(234,067,053)" }}>
						구글로 로그인
					</button>
					<button style={{ backgroundColor: "#03c75a" }}>
						네이버로 로그인
					</button>
					<button
						style={{ backgroundColor: "#fee500", color: "#333" }}
					>
						카카오로 로그인
					</button>
				</div>
			</div>
		</div>
	);
}

export default Signin;
