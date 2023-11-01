import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const CreateListing = () => {
  const [loading, setLoading] = useState(false);
  const [geoLocationEnable, setGeoLocationEnable] = useState(false);
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0, // Corrected typo
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({
          ...formData,
          uid: user.uid,
        });
        setLoading(false);
      } else {
        navigate('/signin');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate, formData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <form onSubmit={handleFormSubmit} className="w-50">
  <h2 className="text-center mb-4">Create Listing</h2>

  <div className="mb-3">
    <label htmlFor="type" className="form-label">Type:</label>
    <select
      id="type"
      name="type"
      className="form-select"
      value={formData.type}
      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
    >
      <option value="rent">Rent</option>
      <option value="sale">Sale</option>
    </select>
  </div>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      className="form-control"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Bedrooms:</label>
    <input
      type="number"
      name="bedrooms"
      className="form-control"
      value={formData.bedrooms}
      onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Bathrooms:</label>
    <input
      type="number"
      name="bathrooms"
      className="form-control"
      value={formData.bathrooms}
      onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Parking:</label>
    <div className="form-check">
      <input
        type="radio"
        id="parkingYes"
        name="parking"
        className="form-check-input"
        value={true}
        checked={formData.parking === true}
        onChange={(e) => setFormData({ ...formData, parking: e.target.value === 'true' })}
      />
      <label htmlFor="parkingYes" className="form-check-label">Yes</label>
    </div>
    <div className="form-check">
      <input
        type="radio"
        id="parkingNo"
        name="parking"
        className="form-check-input"
        value={false}
        checked={formData.parking === false}
        onChange={(e) => setFormData({ ...formData, parking: e.target.value === 'true' })}
      />
      <label htmlFor="parkingNo" className="form-check-label">No</label>
    </div>
  </div>

  <div className="mb-3">
    <label className="form-label">Furnished:</label>
    <div className="form-check">
      <input
        type="radio"
        id="furnishedYes"
        name="furnished"
        className="form-check-input"
        value={true}
        checked={formData.furnished === true}
        onChange={(e) => setFormData({ ...formData, furnished: e.target.value === 'true' })}
      />
      <label htmlFor="furnishedYes" className="form-check-label">Yes</label>
    </div>
    <div className="form-check">
      <input
        type="radio"
        id="furnishedNo"
        name="furnished"
        className="form-check-input"
        value={false}
        checked={formData.furnished === false}
        onChange={(e) => setFormData({ ...formData, furnished: e.target.value === 'true' })}
      />
      <label htmlFor="furnishedNo" className="form-check-label">No</label>
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address:</label>
    <input
      type="text"
      id="address"
      name="address"
      className="form-control"
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
    />
  </div>
  
  
  <button type="submit" className="btn btn-primary">Create Listing</button>
</form>
    </Layout>
  );
};

export default CreateListing;
