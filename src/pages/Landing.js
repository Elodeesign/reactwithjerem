import React, { Component, Fragment } from 'react'

import { Splitter } from '../components'

class Landing extends Component {
    state = { movies: [] }

    async componentDidMount() {
        let response = await fetch(
            'https://api.themoviedb.org/3/discover/movie?api_key=b92715922f04621de38d69cf55169453'
            //'https://api.pokemontcg.io/v1/cards
        )
        let data = await response.json()
        console.log('movies', data)

        // Préparation de movies
        const movies = data.results.map((movie, index) => {
            // alterner les blocks
            if (index % 2 === 0) {
                return {
                    imageLeft:
                        'http://image.tmdb.org/t/p/original/' +
                        movie.poster_path,
                    rightContent: movie.title,
                    leftDetails: movie.release_date
                }
            } else {
                return {
                    imageRight:
                        'http://image.tmdb.org/t/p/original/' +
                        movie.poster_path,
                    leftContent: movie.title,
                    rightDetails: movie.release_date
                }
            }
        })
        this.setState({ movies })
    }

    render() {
        // const landing_parts = [
        //     {
        //         key: 'header',
        //         leftContent: (
        //             <span>
        //                 Je suis
        //                 <br />
        //                 IRON MAN
        //             </span>
        //         ),
        //         imageRight:
        //             'https://cdn.shopify.com/s/files/1/1481/4622/products/mv68308_Iron_man_40_1024x1024.jpg?v=1501281970'
        //     },
        //     {
        //         key: 'firstPart',
        //         rightContent: (
        //             <span>
        //                 L’intelligence
        //                 <br /> ce n’est pas un privilège,
        //                 <br /> c’est un don.
        //             </span>
        //         ),
        //         imageLeft:
        //             'https://sm.ign.com/ign_fr/news/s/spider-man/spider-man-ps4-becomes-marvel-comics-canon-thanks-to-spiderg_ftc3.jpg'
        //     }
        // ]

        const { movies } = this.state

        return (
            <Fragment>
                <h1>Landing Page</h1>
                {movies.map((part, index) => {
                    return <Splitter {...part} />
                })}
            </Fragment>
        )
    }
}

export default Landing
