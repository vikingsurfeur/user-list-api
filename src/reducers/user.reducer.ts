/* Import GET_USERS action */
import { GET_USERS, GET_USERS_ERROR } from "../actions/get.user";

/* Define the user reducer */
const initialState = {};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload;
        case GET_USERS_ERROR:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
