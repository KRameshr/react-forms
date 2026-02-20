import React, { useRef } from "react";

const Uncontrolled = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();

    let fullName = fullNameRef.current.value.trim();
    let email = emailRef.current.value.trim();
    let mobile = mobileRef.current.value.trim();

    // Check if any field is blank
    if (!fullName || !email || !mobile) {
      alert("Please fill in all fields!");
      return;
    }

    // Display values
    alert(`Full Name: ${fullName}\nEmail: ${email}\nMobile: ${mobile}`);
    console.log({ fullName, email, mobile });
  };
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div
        className="card-header text-black text-center py-3"
        style={{ backgroundColor: "#caced4" }}
      >
        <h5 className="mb-0">Uncontrolled Form</h5>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handlerSubmit}>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="form-control"
              ref={fullNameRef}
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              ref={emailRef}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              className="form-control"
              ref={mobileRef}
              placeholder="10-digit mobile number"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Uncontrolled;
