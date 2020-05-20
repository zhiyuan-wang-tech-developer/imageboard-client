import { JSON_WEB_TOKEN } from '../actions'

// Define user jwt reducer
const reducer = (state = '', action = {}) => {
    switch (action.type) {
        case JSON_WEB_TOKEN: {
            return action.payload   // json web token string
        }

        default:
            return state
    }
}

export default reducer