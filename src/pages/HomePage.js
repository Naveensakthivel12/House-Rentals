import React from 'react';
import Layout from '../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const img1 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img2 = "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D";

  const imageStyle = {
    width: "100%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // Add a box shadow
    borderRadius: "8px", // Add border radius
    transition: "transform 0.2s", // Add a transform transition
  };

  const imageContainerStyle = {
    margin: "20px",
    overflow: "hidden", // Hide overflowing shadows
  };

  const btnStyle = {
    backgroundColor: "#f39c12",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.2s",
  };

  const btnHoverStyle = {
    backgroundColor: "#e74c3c", // Change button color on hover
  };

  return (
    <Layout>
      <div className='container mt-3'>
        <div className='row'>
          <h1>Category</h1>
          <div className='col-md-5'>
            <div className='Imagecontainer' style={imageContainerStyle}>
              <img src={img1} alt="Rent" style={imageStyle} />
              <button
                className='btn'
                style={btnStyle}
                onClick={() => navigate('/category/rent')}
              >
                To RENT
              </button>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='Imagecontainer' style={imageContainerStyle}>
              <img src={img2} alt="Rent" style={imageStyle} />
              <button
                className='btn'
                style={btnStyle}
                onClick={() => navigate('/category/sale')}
              >
                To SALE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
