import { instance } from "../utils/instance";

export const signupRequest = async (data) => {
	try {
		const response = await instance.post("/auth/signup", data);
		return response;
	} catch (error) {
		return error.response;
	}
};
