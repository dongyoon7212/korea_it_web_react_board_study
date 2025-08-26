/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";
import { useSearchParams } from "react-router-dom";

function OAuth2Signup() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState({});
	const [searchParam] = useSearchParams();

	useEffect(() => {
		setEmail(searchParam.get("email"));
	}, [searchParam]);

	return (
		<div css={s.container}>
			<h1>회원가입</h1>
			<div css={s.box}>
				<div css={s.inputBox}>
					<AuthInput
						type={"text"}
						placeholder={"아이디"}
						state={username}
						setState={setUsername}
					/>
					<AuthInput
						type={"password"}
						placeholder={"비밀번호"}
						state={password}
						setState={setPassword}
					/>
					<AuthInput
						type={"password"}
						placeholder={"비밀번호 확인"}
						state={confirmPassword}
						setState={setConfirmPassword}
					/>
					<AuthInput
						type={"email"}
						placeholder={"이메일"}
						state={email}
						setState={setEmail}
					/>
				</div>
			</div>
		</div>
	);
}

export default OAuth2Signup;
