import React, { Component } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    padding: 1em;
    border-bottom: 0.1em solid #dedede;
`

const LeftPart = styled.div``

const RightPart = styled.div``

class Navbar extends Component {
    render() {
        return (
            <MainContainer>
                <LeftPart>Accueil</LeftPart>
                <RightPart>Contact</RightPart>
            </MainContainer>
        )
    }
}

export default Navbar
