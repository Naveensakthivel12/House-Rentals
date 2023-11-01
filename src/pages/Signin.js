// 
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";
import Layout from "./../components/Layout/Layout";
import { toast} from 'react-toastify';
import OAuth from "../components/OAuth";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const loginHandler=async(e)=>{
    e.preventDefault()
    try{
      const auth=getAuth()
      const userCredential=await signInWithEmailAndPassword(auth,email,password)
      if(userCredential.user){
          toast.success('Login Success',{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
        navigate("/homepage");
      }
    }catch(error){
      console.log(error);
      toast.error('Invalid Email or Password',{
        position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
      })
    }
  }
  return (
 
      <div className="d-flex  align-items-center justify-content-center w-100 " style={{
    backgroundImage: `url('https://images.pexels.com/photos/1578522/nature-milky-way-galaxy-space-1578522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    height:'100vh',
    backgroundSize: 'cover'
  
}}>
        <form className="bg-light p-4 w-50 rounded shadow-pop " onSubmit={loginHandler}>
          <h4 className="bg-dark p-2 mt-2 text-light text-center rounded">Sign In</h4>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={onChange}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChange}
              className="form-control"
              id="password"
              
            />
            
            <span className="ms-2"  style={{ cursor: "pointer"}}>
              show password
              <BsFillEyeFill
                className="text-danger ms-2"
                style={{ cursor: "pointer"}}
                onClick={() => {
                  setShowPassword((prevState) => !prevState);
                }}
              />
            </span>
            <Link to="/forgot-password">ForgotPassword</Link>
          
          </div>
          <div className="text-center">
          <button type="submit" className="btn btn-primary w-10" >
            Sign in
          </button>
          </div>
          <div className="mt-2 text-center">
            <span>New User</span> <Link style={{textDecoration:"none" ,fontWeight:"bold",color:"Green"}} to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
   
  );
};

export default Signin;
