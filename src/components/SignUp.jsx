import React from 'react';

const SignUp = ({ setCurrentPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign Up functionality would be implemented here!\n(e.g., Register new user)");
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Join Fasal Kart Today!
          </h1>
          <p className="col-lg-10 fs-4 text-muted">
            Create your account to start buying fresh grains, vegetables, and fruits directly from local farmers and empower communities.
          </p>
        </div>

        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary shadow-lg" onSubmit={handleSubmit}>
            <h3 className="mb-4 text-center text-primary">Create Account</h3>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Full Name"
                required
              />
              <label htmlFor="floatingName">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
                required
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary text-center d-block">
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage("signin");
                }}
                className="text-primary text-decoration-none"
              >
                Sign In
              </a>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;