import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeaderLayout extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand"><i className="fa fa-paw"></i> Pets</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/video"><i className="fa fa-video-camera"></i> Videos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/image"><i className="fa fa-camera"></i> Images</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"><i className="fa fa-envelope-o"></i> Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
  }
}
