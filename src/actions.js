import request from 'superagent'

const localHostURL = 'http://localhost:4000'                                // local server
const remoteHostURL = 'https://imageboard-server-20200517.herokuapp.com/'   // heroku remote server

const baseURL = remoteHostURL

// action type
export const FETCH_ALL_IMAGES = 'FETCH_ALL_IMAGES'

// action creator function
function fetchAllImages(payload) {
    return {
        type: FETCH_ALL_IMAGES,
        payload
    }
}

export const getImages = () => {
    return (dispatch, getState) => {
        const storeState = getState()
        const { images } = storeState
        if (!images.length) {
            // in case images.length === 0
            request
                .get(`${baseURL}/image`)
                .then(response => {
                    const action = fetchAllImages(response.body)
                    dispatch(action)
                })
                .catch(console.error)
        }
    }
}

// action type
export const ADD_NEW_IMAGE = 'ADD_NEW_IMAGE'

// action creator function
function addNewImage(payload) {
    return {
        type: ADD_NEW_IMAGE,
        payload
    }
}

export const createImage = (imageData) => {
    return (dispatch, getState) => {
        const storeState = getState()
        const { userJWT } = storeState
        request
            .post(`${baseURL}/image`)
            .set('Authorization', `Bearer ${userJWT}`)  // set the request header 'Authorization'
            .send(imageData)
            .then(response => {
                const action = addNewImage(response.body)
                dispatch(action)
            })
            .catch(console.error)
    }
}

// action type
export const JSON_WEB_TOKEN = 'JSON_WEB_TOKEN'

// action creator function
function jwt(payload) {
    return {
        type: JSON_WEB_TOKEN,
        payload
    }
}

export const login = (email, password) => {
    return (dispatch) => {
        request
            .post(`${baseURL}/login`)
            .send({ email, password })
            .then(response => {
                if (response.body.jwt) {
                    // jwt is defined
                    const action = jwt(response.body.jwt)
                    dispatch(action)
                }
                else {
                    // jwt is undefined
                    console.error(response.body)
                }
            })
            .catch(console.error)
    }
}

export const signup = (email, password) => {
    return () => {
        request
            .post(`${baseURL}/user`)
            .send({ email, password })
            .then(response => {
                if (response.body.email && response.body.email === email) {
                    console.log('sign up successful!')
                    console.log('email: ', response.body.email)
                    console.log('password: ', response.body.password)
                }
                else {
                    console.error(response.body)
                }
            })
            .catch(console.error)
    }
}