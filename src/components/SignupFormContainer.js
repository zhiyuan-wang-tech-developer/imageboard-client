import React from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { signup } from '../actions'

class SignupFormContainer extends React.Component {
    state = {
        email: '',
        password: ''
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.email.length && this.state.password.length) {
            this.props.signup(this.state.email, this.state.password)
        }
        else {
            console.warn('Email or Password is empty in Signup!')
        }
    }

    onChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    render() {
        return (
            <SignupForm
                values={this.state}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}

const mapDispatchToProps = { signup }

export default connect(null, mapDispatchToProps)(SignupFormContainer)