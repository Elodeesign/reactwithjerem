import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Landing, Contact, Signup } from './pages'
import { Navbar } from './components'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/signup" component={Signup} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App
