import React from "react";
import {NavLink} from "react-router-dom" 

const Navbar=()=>{
    return (
        <>
        <div>
            <nav>
                <NavLink to="/" className={(e)=>{return e.isActive?"blue":""}}><li>Home</li></NavLink>
                <NavLink to="/about-us" className={(e)=>{return e.isActive?"blue":""}}><li>About</li></NavLink>
                <NavLink to="/contact-us" className={(e)=>{return e.isActive?"blue":""}}><li>Contact</li></NavLink>
                <NavLink to="/login" className={(e)=>{return e.isActive?"blue":""}}><li>Login</li></NavLink>
                <NavLink to="/user" className={(e)=>{return e.isActive?"blue":""}}><li>User</li></NavLink>
                
            </nav>
        </div>
        </>
    )
}

export default Navbar