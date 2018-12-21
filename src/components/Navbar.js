import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Portal, Modal, SigninForm } from '../components'
import { withUser } from '../contexts'

const MainContainer = styled.div`
    padding: 1em;
    display: flex;
    justify-content: space-between;
    background-color: ${props => (props.scroll ? 'black' : 'white')};
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`

const CustomLink = styled(Link)`
    margin-right: 1em;
    font-weight: ${props => (props.main ? '900' : '')};
    font-size: ${props => (props.main ? '1.3em' : '')};
    color: ${props => (props.scroll ? 'white' : 'black')};
`

const LeftPart = styled.div``

const RightPart = styled.div`
    padding-right: 2em;
`

const NavbarItem = styled.div`
    cursor: pointer;
`

class Navbar extends Component {
    state = {}
    //Scroll navbar change background's color et link
    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })
        })
    }

    logout = async () => {
        const user = await this.props.userAuth.logout()
        this.setState({})
    }

    toggleModal = () =>
        this.setState({
            display_modal: !this.state.display_modal
        })

    render() {
        //const scrollPosition = window.scrollY

        const { scroll, display_modal } = this.state
        const { userAuth } = this.props

        return (
            <MainContainer scroll={scroll}>
                <LeftPart>
                    <CustomLink main to="/">
                        {userAuth.user.username
                            ? userAuth.user.username[0] + '.'
                            : 'J.'}
                    </CustomLink>
                    <CustomLink to="/projects">Projects</CustomLink>
                    <CustomLink to="/about">À propos</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </LeftPart>
                <RightPart>
                    {userAuth.user.authenticated ? (
                        <NavbarItem onClick={this.logout}>
                            Déconnexion
                        </NavbarItem>
                    ) : (
                        <NavbarItem onClick={this.toggleModal}>
                            Connexion
                        </NavbarItem>
                    )}
                    {display_modal && (
                        <Modal onClose={this.toggleModal}>
                            <SigninForm onFormSubmit={this.toggleModal} />
                        </Modal>
                    )}
                </RightPart>
            </MainContainer>
        )
    }
}

export default withUser(Navbar)
