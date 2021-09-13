/* Import axios */
import axios from "axios";

/* Define URL environment constant*/
const { REACT_APP_API_URL_GET_USER } = process.env;

/* Define GET_USERS action */
const GET_USERS = "GET_USERS";
const GET_USERS_ERROR = "GET_USERS_ERROR";

const getUsers = () => {
    return async (dispatch: any) => {
        const onSuccess = (response: any) => {
            dispatch({
                type: GET_USERS,
                payload: response.data["hydra:member"],
            });
            return response;
        };
        const onError = (error: any) => {
            dispatch({
                type: GET_USERS_ERROR,
                payload: error.message,
            });
            return error;
        };
        try {
            const response = await axios({
                method: "GET",
                url: `${REACT_APP_API_URL_GET_USER}`,
                responseType: "json",
                headers: {
                    "Content-type": "application/ld+json",
                    "Accept": "application/ld+json",
                },
            });
            return onSuccess(response);
        } catch (error) {
            return onError(error);
        }
    };
};

export { getUsers, GET_USERS, GET_USERS_ERROR };
