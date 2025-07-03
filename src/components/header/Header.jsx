import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="logo">
                <p>Oral's Blog</p>
            </div>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Articles
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
export default Header;