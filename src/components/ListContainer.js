import React from 'react'
import { getImages } from '../actions'
import { connect } from 'react-redux'
import List from './List'

class ListContainer extends React.Component {
    componentDidMount() {
        this.props.getImages()
    }

    render() {
        return (<List images={this.props.images} userJWT={this.props.userJWT} />)
    }
}

function mapStateToProps(storeState) {
    return {
        images: storeState.images,        // images array
        userJWT: storeState.userJWT       // user json web token string
    }
}

const mapDispatchToProps = { getImages }

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)