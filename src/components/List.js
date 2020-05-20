import React from 'react'
import LoginFormContainer from './LoginFormContainer'
import CreateFormContainer from './CreateFormContainer'
import SignupFormContainer from './SignupFormContainer'

// List function component
function List(props) {
    const images = props.images
        ? props.images.map(image => {
            return (
                <div key={image.url}>
                    <h3>{image.title}</h3>
                    <img src={image.url} alt={image.title} />
                </div>
            )
        })
        : (<p>'Loading images...'</p>)

    const form = props.userJWT
        ? (<CreateFormContainer />)
        : (
            <div>
                <SignupFormContainer />
                <br />
                <LoginFormContainer />
            </div>
        )

    return (
        <div>
            {form}
            {images}
        </div>
    )
}

export default List