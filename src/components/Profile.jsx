import React from 'react';
import profilePic from "../assets/images/profile/aman.jpeg"; // Import your local image

const Profile = () => {
  // Dummy user data for demonstration
  const userProfile = {
    name: "Aman Raj",
    email: "aman123@gmail.com",
    address: "Beta 2, India",
    phone: "+91 9876543210",
    pinCode:"261201",
    memberSince: "January 2024",
    totalOrders: 15,
    lastLogin: "2025-07-21 17:30 IST",
    accountStatus: "Active",
  };

  const handleEditProfile = () => {
    alert("Edit Profile functionality would go here!");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 border-bottom pb-2 text-center"></h2>

      {/* Profile Overview Card */}
      <div className="card shadow-lg mb-5 border-0 rounded-4">
        <div className="card-body p-4 p-md-5">
          <div className="d-flex align-items-center mb-4">
            <img
              src={profilePic} // Use the imported local image here
              alt="Profile"
              className="rounded-circle me-4 shadow-sm"
              style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid var(--primary-color)" }}
            />
            <div>
              <h3 className="card-title mb-1">{userProfile.name}</h3>
              <p className="text-muted mb-0">{userProfile.email}</p>
              <p className="text-muted small">Member since: {userProfile.memberSince}</p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Contact Information */}
          <h5 className="mb-3 text-primary">Contact Information</h5>
          <div className="row mb-3">
            <div className="col-sm-4 text-muted">Phone:</div>
            <div className="col-sm-8 fw-bold">{userProfile.phone}</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4 text-muted">PinCode:</div>
            <div className="col-sm-8 fw-bold">{userProfile.pinCode}</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4 text-muted">Address:</div>
            <div className="col-sm-8">{userProfile.address}</div>
          </div>

          <hr className="my-4" />

          {/* Account Details */}
          <h5 className="mb-3 text-primary">Account Details</h5>
          <div className="row mb-3">
            <div className="col-sm-4 text-muted">Account Status:</div>
            <div className="col-sm-8">
              <span className="badge bg-success py-2 px-3 rounded-pill">{userProfile.accountStatus}</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4 text-muted">Total Orders:</div>
            <div className="col-sm-8 fw-bold">{userProfile.totalOrders}</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4 text-muted">Last Login:</div>
            <div className="col-sm-8">{userProfile.lastLogin}</div>
          </div>

          <div className="mt-4 text-center text-md-start">
            <button className="btn btn-primary btn-lg" onClick={handleEditProfile}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;