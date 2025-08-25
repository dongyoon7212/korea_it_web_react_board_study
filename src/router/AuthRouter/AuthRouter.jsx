import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";
import OAuth2 from "../../pages/OAuth2/OAuth2";

function AuthRouter() {
	return (
		<>
			<Routes>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/oauth2" element={<OAuth2 />} />
			</Routes>
		</>
	);
}

export default AuthRouter;
