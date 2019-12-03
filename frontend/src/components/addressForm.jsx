import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const initialValues = {
  line1: "",
  line2: "",
  city: "",
  stateId: null,
  countryId: null
};

const AddressForm = props => {
  const handleSubmit = (values, actions) => {
    props.handleSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      render={({ errors, touched, handleReset }) => (
        <div className="card b col-5" id="AddressForm">
          <div className="card-body">
            <Form>
              <div className="row form-group">
                <label htmlFor="line1">Address Line 1</label>
                <Field
                  className={
                    "form-control form-control-sm" +
                    (errors.line1 && touched.line1 ? " is-invalid" : "")
                  }
                  name="line1"
                  type="text"
                  placeholder="Street Number, Street Name"
                />
                <ErrorMessage
                  name="line1"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="row form-group">
                <label htmlFor="line2">Address Line 2</label>
                <Field
                  className={
                    "form-control form-control-sm" +
                    (errors.line2 && touched.line2 ? " is-invalid" : "")
                  }
                  name="line2"
                  type="text"
                  placeholder="Apt, Unit"
                />
                <ErrorMessage
                  name="line2"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="row form-group">
                <label htmlFor="city">City</label>
                <Field
                  className={
                    "form-control form-control-sm" +
                    (errors.city && touched.city ? " is-invalid" : "")
                  }
                  name="city"
                  type="text"
                  placeholder="City"
                />
                <ErrorMessage
                  name="city"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="row form-group">
                <label htmlFor="state">State</label>
                <Field
                  className={
                    "form-control form-control-sm" +
                    (errors.state && touched.state ? " is-invalid" : "")
                  }
                  name="state"
                  type="text"
                  placeholder="State"
                />
                <ErrorMessage
                  name="state"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="row form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <Field
                  className={
                    "form-control form-control-sm" +
                    (errors.zipCode && touched.zipCode ? " is-invalid" : "")
                  }
                  name="zipCode"
                  type="text"
                  placeholder="Zip Code"
                />
                <ErrorMessage
                  name="zipCode"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
              <div className="row form-group">
                <label htmlFor="country">Country</label>
                <Field
                  className={
                    "form-control form-control-sm" +
                    (errors.country && touched.country ? " is-invalid" : "")
                  }
                  name="country"
                  type="text"
                  placeholder="Country"
                />
                <ErrorMessage
                  name="country"
                  className="invalid-feedback"
                  component="div"
                />
              </div>
            </Form>
          </div>
        </div>
      )}
    />
  );
};

export default AddressForm;
