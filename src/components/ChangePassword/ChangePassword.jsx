/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import AuthInput from "../AuthInput/AuthInput";
import * as s from "./styles";

function ChangePassword() {
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		setErrorMessage("");
		if (newPassword.length > 0) {
			const passwordRegex =
				/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
			if (!passwordRegex.test(newPassword)) {
				setErrorMessage(
					"비밀번호는 최소 8자에서 16자까지, 영문자, 숫자 및 특수 문자를 포함해야 합니다."
				);
			}
		}
	}, [newPassword]);
	return (
		<div css={s.container}>
			<div css={s.inputBox}>
				<AuthInput
					type={"password"}
					placeholder={"현재 비밀번호"}
					state={password}
					setState={setPassword}
				/>
				<AuthInput
					type={"password"}
					placeholder={"새 비밀번호"}
					state={newPassword}
					setState={setNewPassword}
				/>
				<AuthInput
					type={"password"}
					placeholder={"새 비밀번호 확인"}
					state={newPasswordConfirm}
					setState={setNewPasswordConfirm}
				/>
				<ul>{errorMessage !== "" ? <li>{errorMessage}</li> : <></>}</ul>
				<button>변경하기</button>
			</div>
		</div>
	);
}

export default ChangePassword;
