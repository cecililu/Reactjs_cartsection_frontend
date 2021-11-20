import React, { Component } from 'react'
 const NavBar=(props)=>{
        return(
<nav className="navbar navbar-light bg-light">
    
  <a className="navbar-brand" href="#">The cart
  <div className='badge badge-light btn btn-primary disabled m-2'>{props.value}</div>
   </a>
    </nav>
        );
        }
    export default  NavBar;