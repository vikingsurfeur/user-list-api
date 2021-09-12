/* Import GET_USER_ERROR action type */
import { GET_USERS_ERROR } from "../actions/get.user";

/* Define the user error reducer */
const initialState = {};

const userErrorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_USERS_ERROR:
            return action.payload;
        default:
            return state;
    }
};

export default userErrorReducer;