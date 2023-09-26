import React from "react";

const NavBar = () => {
    return (
        <header>
            <h1 className="site-title">Fiber Vibes</h1>
                <nav className="nav">  
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/cart'>Cart</a>
                </nav>
        </header>
    
    )
}

export default NavBar;