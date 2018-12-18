import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const MainContainer = styled.div`
    padding: 1em;
    display: flex;
    justify-content: space-between;
    background-color: black;
`

const LeftPart = styled.div``

const RightPart = styled.div``

class Navbar extends Component {
    render() {
        return (
            <MainContainer>
                <LeftPart>
                    <Link to="/">Accueil</Link>
                </LeftPart>
                <RightPart>
                    <Link to="/signup" style={{ marginRight: '1em' }}>
                        S'enregistrer
                    </Link>
                    <Link to="/contact">Contact</Link>
                </RightPart>
            </MainContainer>
        )
    }
}

export default Navbar
