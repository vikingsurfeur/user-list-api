/* Import GET_USERS action */
import { GET_USERS } from "../actions/get.user";

/* Define the user reducer */
const initialState = {};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
