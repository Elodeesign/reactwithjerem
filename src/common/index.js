//import React, { Component } from 'react'
import styled from 'styled-components'

export const Form = styled.form`
    display: grid;
    flex-direction: column;
    justify-content: center;
`

export const Input = styled.input`
    padding: 0.2em;
    font-size: 1em;
    border-radius: 0.2em;
    font-weight: bold;
    border: 0.1em solid #dedede;
    margin-bottom: 1em;
    width: 20em;
`
export const Button = styled.button`
    color: white;
    font-weight: bold;
    padding: 1em;
    width: 10em;
    background-color: black;
    &:hover {
        background-color: red;
        color: white;
        cursor: pointer;
    }
`
