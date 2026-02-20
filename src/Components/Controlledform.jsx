import React, { useState } from "react";

const Controlledform = () => {
  const [state, setState] = useState({ fullname: "", email: "", mobile: "" });
  const [error, setError] = useState(null);

  // for validation

  const getValidationErrors = () => {
    let validationErrors = [];
    let fnameRegex = /^[a-zA-Z]+$/;
    let mobileRegex = /^[6-9][0-9]{9}$/;
    if (state.fullname.trim() === "")
      validationErrors.push("FullName cannot be blank");
    if (!fnameRegex.test(state.fullname))
      validationErrors.push(
        "fullname:-  Only Alpabets no white space are allowed",
      );
    if (state.email.trim() === "")
      validationErrors.push("Email cannot be blank");
    if (state.mobile.trim() === "")
      validationErrors.push("Mobile cannot be blank");
    if (!mobileRegex.test(state.mobile))
      validationErrors.push("Mobile Only 10 Number");
    return validationErrors;
  };
  const handler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const validationErrors = getValidationErrors();
    if (validationErrors.length > 0) {
      setError(validationErrors);
      return;
    }
    setError(null);
    console.log(state);
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div
        className="card-header text-black text-center py-3"
        style={{ backgroundColor: "#d7d8db" }}
      >
        <h5 className="mb-0">Controlled Form</h5>
      </div>
      <div className="card-body p-4">
        {error && error.length > 0 && (
          <div className="alert alert-danger" role="alert">
            <h6 className="alert-heading mb-2">⚠️ Please fix the following:</h6>
            <ul className="mb-0 ps-3">
              {error.map((val, ind) => (
                <li key={ind} className="small">
                  {val}
                </li>
              ))}
            </ul>
          </div>
        )}

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
              value={state.fullname}
              onChange={handler}
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
              value={state.email}
              onChange={handler}
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
              value={state.mobile}
              onChange={handler}
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

export default Controlledform;
