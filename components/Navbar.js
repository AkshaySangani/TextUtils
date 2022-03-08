import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
export default function Navbar(props) {
    const navigate = useNavigate();
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === "light" ? "info" : "dark"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className={`border-0 btn mx-1 btn-info bg-${props.mode === "light" ? "info" : "dark"} text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => navigate('/')} >Home</button>
                            </li>
                            <li className="nav-item">
                                <button className={`border-0 btn btn-info bg-${props.mode === "light" ? "info" : "dark"} text-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={() => navigate('/About')} >About</button>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "light" ? "Enabled" : "Disabled"}&nbsp;Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
