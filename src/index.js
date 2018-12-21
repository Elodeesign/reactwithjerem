import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { UserContext } from './contexts'


class UserAuth {
    constructor(){
        this.user = {}
    }

    signIn = (user) => {
        this.user = {
            username: user.username,
            authenticated: true
        }
    }

    logout = () => {
        this.user = null
        console.log('USER AUTH LOGOUT')
        this.user = null
        console.log("user",this.user)
    }
}

const WithUserApp = () => (
    <UserContext.Provider value={new UserAuth()}>
        <App />
    </UserContext.Provider>
)

ReactDOM.render(<WithUserApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
