import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <React.Fragment>
            <h1 style={headerStyle}>Todo List</h1>
            <Link style={linkStyle} to='/'>Home</Link>  |
            <Link style={linkStyle} to='/about'>About</Link>
        </React.Fragment>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    textDecoration: 'none'
}