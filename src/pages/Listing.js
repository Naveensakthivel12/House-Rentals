import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase.config';
import { getAuth } from 'firebase/auth';
import { useNavigate, Link, useParams } from 'react-router-dom';

const Listing = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const docRef = doc(db, 'listings', params.listingId); // 'listings' instead of 'listing'
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data());
          setListing(docSnap.data());
        }
        setLoading(false); // Set loading to false after the data is fetched
      } catch (error) {
        console.error(error);
      }
    };

    fetchListing();
  }, [params.listingId]);

  return (
    <Layout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Listing Details</h1>
          <p>Listing ID: {params.listingId}</p>
          {listing && (
            <div>
              <h2>{listing.title}</h2>
              <p>{listing.description}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
}

export default Listing;
