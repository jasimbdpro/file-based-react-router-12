import React from 'react'
import { Link } from 'react-router'

function Headers() {
  return (
    <div>
        <div>
            Home
            Logo
        </div>
    <ul>
        <li><Link to="/">New Link <span style={{color: "red"}}>Push</span> </Link></li>
        <li><Link to="/">New Link</Link></li>
        <li><Link to="/">New Link</Link></li>
        <li><Link to="/">New Link</Link></li>
        <li><Link to="/">New Link</Link></li>
        <li><Link to="/">New Link</Link></li>
    </ul>
    </div>
  )
}

export default Headers