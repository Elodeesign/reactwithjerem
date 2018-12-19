import React, { Component } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    height: ${props => props.height};
    min-height: ${props => (props.height ? props.height : '100vh')};
`

class Content extends Component {
    render() {
        return <MainContainer />
    }
}

export default Content
