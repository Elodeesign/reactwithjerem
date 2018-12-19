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
    position: relative;
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
    position: relative;
`

const Title = styled.h1`
    font-size: ${props => (props.bigTitle ? '7em' : '5em')};
`

const Details = styled.div`
    background-color: black;
    position: absolute;
    color: white;
    height: 3em;
    width: 20em;
    padding: 1em;
    bottom: 7;
    right: ${props => props.rightAlign && '-7em'};
    left: ${props => props.leftAlign && '-7em'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`

const DetailsLabel = styled.div``

const DetailsText = styled.div``

class Splitter extends Component {
    render() {
        const {
            leftContent,
            rightContent,
            leftDetails,
            rightDetails,
            detailsLabel
        } = this.props
        return (
            <MainContainer>
                <LeftPart {...this.props}>
                    <Title>{leftContent}</Title>
                    {leftDetails && (
                        <Details rightAlign>
                            <DetailsLabel>
                                {detailsLabel ? detailsLabel : 'Réalisé le:'}
                            </DetailsLabel>
                            <DetailsText>{leftDetails}</DetailsText>
                        </Details>
                    )}
                </LeftPart>
                <RightPart {...this.props}>
                    <Title>{rightContent}</Title>
                    {rightDetails && (
                        <Details leftAlign>
                            <DetailsLabel>
                                {detailsLabel ? detailsLabel : 'Réalisé le:'}
                            </DetailsLabel>
                            <DetailsText>{rightDetails}</DetailsText>
                        </Details>
                    )}
                </RightPart>
            </MainContainer>
        )
    }
}

export default Splitter
