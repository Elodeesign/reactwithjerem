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

const CustomLink = styled(Link)`
    margin-right: 1em;
    font-weight: ${props => (props.main ? '900' : '')};
    font-size: ${props => (props.main ? '1.3em' : '')};
`

const RightPart = styled.div``

class Navbar extends Component {
    render() {
        return (
            <MainContainer>
                <LeftPart>
                    <CustomLink main to="/">
                        E.
                    </CustomLink>
                    <CustomLink to="/projects">Projects</CustomLink>
                    <CustomLink to="/about">À propos</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </LeftPart>
                <RightPart />
            </MainContainer>
        )
    }
}

export default Navbar
