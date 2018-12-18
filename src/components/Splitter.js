import React, { Component } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    height: ${props => props.height};
    min-height: ${props => (props.height ? props.height : '100vh')};
`

const LeftPart = styled.div`
    background-color: ${props => props.backgroundLeft};
    height: 100%;
    background-image: url(${props => props.imageLeft});
    flex: 1;
    background-position: center;
    background-size: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    display: flex;
`

const RightPart = styled.div`
    background-color: ${props => props.backgroundRight};
    background-image: url(${props => props.imageRight});
    height: 100%;
    flex: 1;
    background-position: center;
    background-size: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    display: flex;
`

const Title = styled.h1`
    font-size: ${props => (props.bigTitle ? '7em' : '5em')};
`

class Splitter extends Component {
    render() {
        const { leftContent, rightContent } = this.props
        return (
            <MainContainer>
                <LeftPart {...this.props}>
                    <Title>{leftContent}</Title>
                </LeftPart>
                <RightPart {...this.props}>
                    <Title>{rightContent}</Title>
                </RightPart>
            </MainContainer>
        )
    }
}

export default Splitter
