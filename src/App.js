import React, { Component, Fragment, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Landing, Contact, Signup, About, Projects } from './pages'
import { Navbar } from './components'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Suspense fallback={<div>LOADING</div>}>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </Suspense>
                </Fragment>
            </Router>
        )
    }
}

export default App
