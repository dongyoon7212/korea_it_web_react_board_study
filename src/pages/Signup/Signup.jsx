/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import AuthInput from "../../components/AuthInput/AuthInput";

function Signup() {
	return (
		<div css={s.container}>
			<h1>회원가입</h1>
			<div css={s.box}>
				<div css={s.inputBox}>
					<AuthInput type={"text"} placeholder={"아이디"} />
					<AuthInput type={"password"} placeholder={"비밀번호"} />
					<AuthInput
						type={"password"}
						placeholder={"비밀번호 확인"}
					/>
					<AuthInput type={"email"} placeholder={"이메일"} />
				</div>
				<div css={s.btnBox}>
					<button>가입하기</button>
				</div>
			</div>
		</div>
	);
}

export default Signup;
