import React, { Component } from 'react'

import { Form, Button, Input } from '../common'

class SignupForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password_confirm: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitForm = event => {
        event.preventDefault()

        const { username, email, password, password_confirm } = this.state
        if (password === password_confirm && this.props.onFormSubmit) {
            this.props.onFormSubmit({
                username,
                email,
                password,
                password_confirm
            })
        } else {
            alert('Les mots de passes ne sont pas identiques')
        }
    }

    render() {
        const { username, email, password, password_confirm } = this.state

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
                <Input
                    placeholder="confirmer le mot de passe"
                    name="password_confirm"
                    value={password_confirm}
                    onChange={this.handleChange}
                    type="password"
                />
                <Button>Connexion</Button>
            </Form>
        )
    }
}

export default SignupForm
