import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const MyvalidationRules = Yup.object({
  fullname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(/^[a-zA-Z\s]+$/, "Only alphabets and spaces allowed")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  confirmemail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Email and ConfirmEmail Match")
    .required("Required"),
  mobile: Yup.string()
    .length(10, "Must be exactly 10 digits")
    .matches(/^[6-9][0-9]{9}$/, "Must contain only numbers")
    .required("Required"),
});

const Formikvalidation = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      confirmemail: "",
      mobile: "",
    },
    validationSchema: MyvalidationRules,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div
        className="card-header text-black text-center py-3"
        style={{ backgroundColor: "#d7d8db" }}
      >
        <h5 className="mb-0">Formik Validation</h5>
      </div>
      <div className="card-body p-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className={`form-control ${formik.touched.fullname && formik.errors.fullname ? "is-invalid" : ""}`}
              onChange={formik.handleChange}
              value={formik.values.fullname}
              onBlur={formik.handleBlur}
              placeholder="Enter your full name"
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <div className="invalid-feedback">{formik.errors.fullname}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmemail" className="form-label">
              Confirm Email
            </label>
            <input
              type="email"
              name="confirmemail"
              id="confirmemail"
              className={`form-control ${formik.touched.confirmemail && formik.errors.confirmemail ? "is-invalid" : ""}`}
              onChange={formik.handleChange}
              value={formik.values.confirmemail}
              onBlur={formik.handleBlur}
              placeholder="Confirm your email"
            />
            {formik.touched.confirmemail && formik.errors.confirmemail && (
              <div className="invalid-feedback">
                {formik.errors.confirmemail}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              className={`form-control ${formik.touched.mobile && formik.errors.mobile ? "is-invalid" : ""}`}
              onChange={formik.handleChange}
              value={formik.values.mobile}
              onBlur={formik.handleBlur}
              placeholder="10-digit mobile number"
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <div className="invalid-feedback">{formik.errors.mobile}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formikvalidation;
