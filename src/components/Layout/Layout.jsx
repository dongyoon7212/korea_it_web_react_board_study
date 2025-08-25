/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import { getPrincipalRequest } from "../../apis/auth/authApis";
import Header from "../Header/Header";
import * as s from "./styles";

function Layout({ children }) {
	const { data, isLoading } = useQuery({
		queryKey: ["getPrincipal"],
		queryFn: getPrincipalRequest,
		refetch: 1,
	});
	return (
		<div css={s.layout}>
			<Header />
			<div css={s.mainContainer}>{children}</div>
		</div>
	);
}

export default Layout;
