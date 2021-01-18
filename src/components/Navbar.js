import React from 'react'


const Navbar = () => {
    return (
        
           
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                <i className="fas fa-check d-inline-block align-top"></i>
                {/* <img src={logo} alt="" width="30" height="24" className="d-inline-block align-top"/> */}{/*  Bootstrap */} {/* Texten måste flyttas upp på samma rad för att den ska foramateras rätt på sidan med marginal till höger om texten */}
                <span className="ms-2 nav-head" >Todo List</span>
                </a>
            </div>
        </nav>
    
    )
}

export default Navbar

