import React from 'react'
import { connect } from 'react-redux'
import { createImage } from '../actions'
import CreateForm from './CreateForm'

class CreateFormContainer extends React.Component {
    state = {
        title: '',
        url: ''
    }

    onChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.title.length && this.state.url.length) {
            this.props.createImage(this.state)
        }
        else {
            console.warn('Title or URL is empty in Create')
        }
        // clear state
        this.setState(
            {
                title: '',
                url: ''
            }
        )
    }

    render() {
        return (
            <CreateForm
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                values={this.state}
            />
        )
    }
}

const mapDispatchToProps = { createImage }

export default connect(null, mapDispatchToProps)(CreateFormContainer)