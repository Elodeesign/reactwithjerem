import React, { Component, Fragment } from 'react'

import { SigninForm } from '../components'

class Landing extends Component {
    state = { isValid: false, data: '' }

    handleConnection = data => {
        this.setState({ isValid: true, data: data })
    }

    render() {
        //console.log(this.state.isValid, this.state.data)
        const { data, isValid } = this.state
        return (
            <Fragment>
                {isValid ? (
                    <Fragment>
                        <h1>Bienvenue {data.username} </h1>
                        <p>Email : {data.email}</p>
                    </Fragment>
                ) : (
                    <Fragment>
                        <h1>Veuillez vous connecter</h1>
                        <SigninForm onFormSubmit={this.handleConnection} />
                    </Fragment>
                )}
            </Fragment>
        )
    }
}

export default Landing
