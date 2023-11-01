import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import {BsFillEyeFill}  from 'react-icons/bs';
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {db} from '../firebase.config';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';
const Signup = () => {
  const [showPassword,setShowPassword]=useState(false)
  const[formData,setFormData]=useState({
    email:'',
    name:'',
    password:''
  })
  const {name,email,password}=formData
  const navigate=useNavigate()

  const onChange=(e)=>{
    setFormData(prevState=>({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }
  const onSubmitHndler=async(e)=>{
    e.preventDefault()
    try{
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Signup Successfully!!!",{
        
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          
      });
      navigate("/homepage");
    }catch(error){
      console.log(error);
      toast.error('Something went wrong!!!',{
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
  
      <div className="d-flex align-items-center justify-content-center w-100 bg-image" style={{
    backgroundImage: `url('https://images.pexels.com/photos/16637496/pexels-photo-16637496/free-photo-of-a-person-walking-down-a-street-in-a-small-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    height:'100vh',
    backgroundSize: 'cover'
  
}}>
      <form className='bg-light p-4 w-50 shadow-pop rounded' onSubmit={onSubmitHndler}>
        <h4 className="bg-dark p-2 mt-2 text-light text-center rounded ">Sign Up</h4>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
    <input type="text" value={name} className="form-control" id="name" onChange={onChange} aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type={showPassword?"text":"password"} value={password} onChange={onChange} className="form-control" id="password" />
    <span>showPassword <BsFillEyeFill className='text-ms-2' style={{cursor:"pointer"}} onClick={()=>{setShowPassword((prevState)=>!prevState)}}></BsFillEyeFill></span>
  </div>
 <div className='text-center'>
  <button type="submit" className="btn btn-primary">
    Sign up
  </button>
  </div>
  <div className='text-center'>
    <h6 className='mt-2'>Login with Google</h6>
    <OAuth/>
    <div className="mt-2">
            <span>Already User !</span> <Link style={{textDecoration:"none" ,fontWeight:"bold",color:"Green"}} to="/signin">Sign In</Link>
          </div>
  </div>
</form>

       </div>


      


  )
}

export default Signup