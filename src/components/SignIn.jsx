import React from 'react';

const SignIn = ({ setCurrentPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign In functionality would be implemented here!\n(e.g., Authenticate user)");
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Welcome to Fasal Kart
          </h1>
          <p className="col-lg-10 fs-4 text-muted">
            Sign in to access your dashboard, track orders, manage your wishlist, and buy fresh produce directly from farmers.
          </p>
        </div>

        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary shadow-lg" onSubmit={handleSubmit}>
            <h3 className="mb-4 text-center text-primary">Sign In</h3>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
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
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" className="me-2" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign In
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary text-center d-block">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage("signup");
                }}
                className="text-primary text-decoration-none"
              >
                Sign Up
              </a>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;