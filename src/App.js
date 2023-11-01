// import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Offers from "./pages/Offers";
import Signup from "./pages/Signup";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Category from './pages/Category';
import CreateListing from "./pages/CreateListing";
import Contact from "./pages/Contact";
// import Profile 
function App() {
  return (
   <BrowserRouter>
   <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}/>
   <Routes>
    
    <Route path="/" element={<Signup/>}/>
    <Route path="/homepage" element={<HomePage/>}/>
    <Route path="/offers" element={<Offers/>}/>
    <Route path="/category/:categoryName" element={<Category/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/profile" element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      </Route>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact/:landlord" element={<Contact/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    {/* <Route path="/create-listing" element={<CreateListing/>}/> */}
    <Route path="/offers" element={<Offers/>}/>
    </Routes>   
    </BrowserRouter>
  );
}

export default App;
