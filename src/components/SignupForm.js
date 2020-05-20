import React from 'react'

// functional component 'SignupForm'
function SignupForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                name='email'
                type='text'
                placeholder='User Email'
                value={props.values.email}
                onChange={props.onChange}
            />
            <br />
            <input
                name='password'
                type='text'
                placeholder='User Password'
                value={props.values.password}
                onChange={props.onChange}
            />
            <br />
            <input
                name='Signup'
                type='submit'
                value='Sign up'
            />
        </form>
    )
}

export default SignupForm