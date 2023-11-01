import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import {doc,getDoc} from 'firebase/firestore'
import {useParams,useSearchParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';


const Contact = () => {
    const [message,setMessage]=useState('')
    const [landlord,setLandlord]=useState('')
    const [searchParams,setSearchParams]=useSearchParams()
    const params=useParams()

    useEffect(()=>{
        const getLandlord=async()=>{
            if (params.landlordId) {
                const docRef = doc(db, 'users', params.landlordId);
                try {
                  const docSnap = await getDoc(docRef);
                  if (docSnap.exists()) {
                    setLandlord(docSnap.data());
                  } else {
                    toast.error('User not found');
                  }
                } catch (error) {
                  console.error('Error fetching data:', error);
                  toast.error('Unable to fetch data');
                }
              } else {
                toast.error('Invalid landlord ID');
              }
            };
        
            getLandlord();
          }, [params.landlordId]);
        
  return (
    <Layout> 
        <div className=' container d-flex align-items-center justify-content-center mt-4'>
            <h1>Contact</h1>
            {
                landlord!== ''&&(
                    <main>
                        <h4>{landlord?.name}</h4>
                    </main>
                )

            }
        </div>
    </Layout>
  )
}

export default Contact