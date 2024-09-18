import react from "react";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";
import {Link} from "react-router-dom";



const login = () => {
    return (
        <div className="main">
            <h2>login</h2>
            <form className="mainform">
              <div className="inputgroup">
                    <label htmlFor="name">Name:</label>
                    <input type="text"id="name"autoComplete="off"placeholder="Enter your name">

                    </input>

                    <label htmlFor="email">Email:</label>
                    <input type="email"id="email"autoComplete="off"placeholder="Enter your email">

                    </input>

                    <label htmlFor="password">Password:</label>
                    <input type="password"id="password"autoComplete="off"placeholder="Enter your password">

                    </input>
                    <Link to ="/"><button type="submit" class="btn btn-success" onClick={()=>{toast.success("login successfully😁")}}>Login</button></Link>
            </div>
            </form>
            <div className="login">
               <p>
                Already have an account ?
               </p>
               <button type="submit" class="btn btn-primary">Login</button>

            </div>
        </div>   
    );
    
}

export default login