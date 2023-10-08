import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo3-noBg.png";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Navbar = () => {

    const { currentUser , logout} = useContext(AuthContext);

    return (
        <div className="navbar">
          <div className="container">
              <div className="logo">
                  <Link to="/  ">
                    <img src={Logo} alt="blog"></img>
                    <span>{currentUser?.username}</span>
                  </Link>
              </div>
              <div className="links">
                  <Link className="link" to="/?cat=art"> 
                      <h6>Art</h6>
                  </Link>
                  <Link className="link" to="/?cat=science"> 
                      <h6>Science</h6>
                  </Link>
                  <Link className="link" to="/?cat=technology"> 
                      <h6>Technology</h6>
                  </Link>
                  <Link className="link" to="/?cat=cinema"> 
                      <h6>Cinema</h6>
                  </Link>
                  <Link className="link" to="/?cat=design"> 
                      <h6>Design</h6>
                  </Link>
                  <Link className="link" to="/?cat=food"> 
                      <h6>Food</h6>
                  </Link>
                  

                  { currentUser ? (<span onClick={logout}><b>Logout</b></span>) 
                                : ( <Link className="link" to="/login"><b>Login</b>
                  </Link> )}

                  <span className="write">
                      <Link className="link" to="write">Write</Link>
                      </span>
                
                  </div>
         </div>
       </div>
    )
}

export default Navbar