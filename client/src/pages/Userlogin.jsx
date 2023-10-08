import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/authContext"
import { useContext } from "react";

 
const  Userlogin = () => {

    const [inputs,setInputs] = useState({
        username:"",
        password:"",

    });

    const[err,setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
      };

      console.log(inputs);

      const handleSubmit = async (e) => {
        e.preventDefault();   // to use when click on button prevent refreshing all page
        try {
         // const res = await axios.post("/auth/register",inputs); if everything is okay after register 
         //console.log(res);                                        redirect to login page
         // await axios.post("/auth/login",inputs);
          await login(inputs)
          navigate("/");

        } catch (err) {
          setError(err.response.data);
         // console.log(err);
        }
      };
    return(
      <div className="auth">
        <h1>Login page</h1>
        <form style={{padding: 20}}>
          Enter User Id:
          <input required type="text" name="username" placeholder="username" onChange={handleChange}/> <br/>
          Enter Password:
          <input required type="password" name="password" placeholder="password" onChange={handleChange}/> <br/>
          <button onClick={handleSubmit}>Login</button>
          {err && <p>{err}</p>}

          <span>Don't have account ?</span>
          <span> <Link to="/register">Please Register</Link></span>
        </form>
      </div>
    )
}

export default Userlogin;