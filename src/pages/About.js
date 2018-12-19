import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { Content, Skills } from '../components'

const Title = styled.h1`
    font-size: ${props => (props.bigTitle ? '7em' : '5em')};
    margin-top: 2em;
`

class About extends Component {
    render() {
        return (
            <Fragment>
                <Title>
                    REACT VS VUE... <br />
                    IL FAUT FAIRE UN CHOIX
                </Title>
                <Content />
                <Skills />
            </Fragment>
        )
    }
}

export default About
