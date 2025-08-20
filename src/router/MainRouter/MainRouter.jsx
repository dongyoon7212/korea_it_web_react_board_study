import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Write from "../../pages/Write/Write";

function MainRouter() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/write" element={<Write />} />
			</Routes>
		</>
	);
}

export default MainRouter;
