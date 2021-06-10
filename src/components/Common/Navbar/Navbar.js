import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) => {

  const {isLoggedIn,userName,role} = props.loginInfo;
  
  const logout=()=>{
    if (window.confirm('Do you want to logout?')) {
      window.localStorage.removeItem('userId');
      window.localStorage.removeItem('userName');
      window.localStorage.removeItem('role');
      window.location.replace('/');
    } else {

    }
    
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
      <div className="container">
        <a className="navbarbrand" href="/home">
          COnnectify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        icon
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
          {isLoggedIn?<li className="nav-item">
          <a href="/chatroom" className="navLink">Chat Room</a>
          </li>:null
            }
          {isLoggedIn?<li className="nav-item">
          <a href="/timeline" className="navLink">Timeline</a>
          </li>:null
            }
            {isLoggedIn?<li className="nav-item m-2">
              <p className="main-text p-nav">Welcome <span>{userName}</span>!</p>
            </li>:null
            }
            {isLoggedIn?<li className="nav-item"><button className="btnDanger" onClick={logout}>logout</button></li>:
            null
              }
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
