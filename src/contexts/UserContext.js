import React, { Component, createContext } from 'react'

const UserContext = React.createContext(null)

export const withUser = Component => props => (
    <UserContext.Consumer>
        {user => <Component {...props} user={user} />}
    </UserContext.Consumer>
)

export default UserContext
