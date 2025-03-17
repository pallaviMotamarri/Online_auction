import axios from "axios";
import { USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../store/reducers/userConstants";

export const updateUserProfile = (userData) => async (dispatch) => {
    try {
        const response = await axios.put("/api/users/profile", userData);
        dispatch({ type: USER_UPDATE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAIL, payload: error.response.data.message });
    }
};
