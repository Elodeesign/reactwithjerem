import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../common'

import { SignupForm } from '../components'

class Signup extends Component {
    state = { isValid: false }

    handleSubmit = data => {
        this.setState({ isValid: true })
    }

    render() {
        const { isValid } = this.state
        return (
            <Fragment>
                {isValid ? (
                    <Fragment>
                        <h1>Votre enregistrement est OK </h1>
                        <p>Veuillez vous connectez</p>
                        <Button>
                            <Link to="/">Accueil</Link>
                        </Button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <h1>Veuillez vous enregistrer</h1>
                        <SignupForm onFormSubmit={this.handleSubmit} />
                    </Fragment>
                )}
            </Fragment>
        )
    }
}

export default Signup
