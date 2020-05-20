import React from 'react'

// functional component 'CreateForm'
function CreateForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                name='title'
                type='text'
                placeholder='Image Title'
                value={props.values.title}
                onChange={props.onChange}

            />
            <br />
            <input
                name='url'
                type='text'
                placeholder='Image URL'
                value={props.values.url}
                onChange={props.onChange}
            />
            <br />
            <input
                name='create'
                type='submit'
                value='Create'
            />
        </form>
    )
}

export default CreateForm