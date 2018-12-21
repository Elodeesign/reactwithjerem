import React, { Component } from 'react'

import { Form, Button, Input } from '../common'

import { withUser } from '../contexts'

class SigninForm extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitForm = event => {
        event.preventDefault()
        this.props.userAuth.signIn(this.state)
        if (this.props.onFormSubmit) {
            this.props.onFormSubmit(this.state)
        }
    }

    render() {
        const { username, email, password } = this.state

        return (
            <Form onSubmit={this.submitForm}>
                <Input
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                />
                <Input
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    type="email"
                />
                <Input
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    type="password"
                />
                <Button>Connexion</Button>
            </Form>
        )
    }
}

export default withUser(SigninForm)
