import React from 'react'
import NavBar from './navbar'

const Layout = ({ children, ...rest }) => (
    <div {...rest} class="container mx-auto px-10 pt-16 pb-64">
        <NavBar />
        {children}
    </div>
)

export default Layout