import { FETCH_ALL_IMAGES, ADD_NEW_IMAGE } from '../actions'

// Define images reducer
const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case FETCH_ALL_IMAGES: {
            return action.payload   // images array
        }

        case ADD_NEW_IMAGE: {
            /**
             * add the action.payload to the beginning of the array to
             * make sure that images appear at the top of the page when they are created.
             */
            return [action.payload, ...state]
        }

        default:
            return state
    }
}

export default reducer