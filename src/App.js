import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Landing, Contact } from './pages'
import { Navbar } from './components'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Router>
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default App
