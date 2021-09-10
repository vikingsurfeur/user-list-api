/* Import axios */
import axios from "axios";

/* Define URL environment constant*/
const { REACT_APP_API_URL_GET_USER } = process.env;

/* Define GET_USERS action */
const GET_USERS = "GET_USERS";

const getUsers = () => {
    return (dispatch: any) => {
        axios({
            method: "GET",
            url: `${REACT_APP_API_URL_GET_USER}`,
            headers: {
                Accept: "application/ld+json",
            },
        })
            .then((response) => {
                dispatch({
                    type: "GET_USERS",
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: "GET_USERS_ERROR",
                    payload: error,
                });
            });
    };
};

export { getUsers, GET_USERS };
