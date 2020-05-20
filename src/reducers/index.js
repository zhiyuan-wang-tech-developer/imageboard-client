// import combine reducers
import { combineReducers } from 'redux'
// import images reducer
import images from './images'
// import user reducer
import userJWT from './user'

// export a base reducer
export default combineReducers(
    {
        // put sub-reducers here
        images,     // save images
        userJWT     // save user's json web token after successfully logging in
    }
)