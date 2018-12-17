import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={() => <h1>Landing </h1>} />
                    <Route
                        path="/contact"
                        component={() => <h1>Contact </h1>}
                    />
                </Switch>
            </Router>
        )
    }
}

export default App
