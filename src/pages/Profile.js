import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';
import { db } from '../firebase.config';
import { FaEdit ,FaRegArrowAltCircleRight} from 'react-icons/fa';
import { MdDoneOutline } from 'react-icons/md';
import { doc, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/signup');
    } else {
      setFormData({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      });
    }
  }, [auth.currentUser, navigate]);

  const { name, email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const logout = () => {
    auth.signOut();
    toast.success('Successfully Logout');
    navigate('/signin');
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser) {
        if (auth.currentUser.displayName !== name) {
          await updateProfile(auth.currentUser,{
          displayName:name,  
          });
        }

        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, { name });
        toast.success('User Updated!!!');
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      toast.error('Something went wrong');
    }
  };
  return (
    <Layout>
      <div className='container mt-4 w-50 d-flex justify-content-between'>
        <h4>Profile Details</h4>
        <button className='btn btn-danger' onClick={logout}>
          Logout
        </button>
      </div>
      <div className='container mt-4 card' style={{ width: '18rem' }}>
        <div className='card-header'>
          <div className='d-flex justify-content-between'>
            <p>User Personal Details</p>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState);
              }}
            >
              {changeDetails ? <MdDoneOutline color='green' /> : <FaEdit color='red' />}
            </span>
          </div>
        </div>
        <div className='card-body'>
          <form>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                value={name}
                onChange={onChange}
                disabled={!changeDetails}
              />
            </div>
          
          </form>
          </div>
         
      </div>
      <div className='container mt-4 w-50 d-flex justify-content-center'>
      {/* <Link to={'/create-listing'}>
       <FaRegArrowAltCircleRight/>    Sell or Rent Your Home
          </Link> */}
      </div>
    </Layout>
  );
};

export default Profile;
