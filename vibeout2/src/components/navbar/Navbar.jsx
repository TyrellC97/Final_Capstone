import React from 'react'
import MyPage from '../mainFeed/MyPage/MyPage'
import MainFeed from '../mainFeed/MainFeed'
import { Link } from "react-router-dom";

function Navbar() {
  return (

    // Navigation
    <div >
        <nav className="navbar navbar-expand-lg bg-body-tertiary heading" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">vibeout</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/profile"> My Profile </Link></li>
            <li><a className="dropdown-item" href="#"></a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
 

