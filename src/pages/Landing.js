import React, { Component, Fragment } from 'react'

import { Splitter } from '../components'

class Landing extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <h1>Landing Page</h1>
                <Splitter
                    imageRight="https://cdn.shopify.com/s/files/1/1481/4622/products/mv68308_Iron_man_40_1024x1024.jpg?v=1501281970"
                    leftContent={
                        <span>
                            Je suis
                            <br />
                            IRON MAN
                        </span>
                    }
                />
                <Splitter
                    rightContent={
                        <span>
                            L’intelligence
                            <br /> ce n’est pas un privilège,
                            <br /> c’est un don.
                        </span>
                    }
                    imageLeft="https://www.sideshowtoy.com/assets/products/300554-spider-man-miles-morales/lg/marvel-spider-man-miles-morales-premium-format-figure-sideshow-300554-13.jpg"
                />
            </Fragment>
        )
    }
}

export default Landing
