import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions'

class LoginFormContainer extends React.Component {
    state = {
        email: '',
        password: ''
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.email.length && this.state.password.length) {
            this.props.login(this.state.email, this.state.password)
        }
        else {
            console.warn('Email or Password is empty in Login!')
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
            <LoginForm
                values={this.state}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}

const mapDispatchToProps = { login }

export default connect(null, mapDispatchToProps)(LoginFormContainer)