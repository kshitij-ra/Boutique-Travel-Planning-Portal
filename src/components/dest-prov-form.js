import React from 'react';
import './dest-prov-form.css';

const DestProvForm = (props) => {
  return (
    <div className="dest-prov-form-container">
      <form className="dest-prov-form-form">
        <div className="dest-prov-form-section">
          <div className="dest-prov-form-col">
            <label className="dest-prov-form-label">Company Name</label>
            <input
              type="text"
              required
              autoComplete="organization"
              placeholder="Company Name"
              className="dest-prov-form-textinput input"
            />
          </div>
          <div className="dest-prov-form-col">
            <label className="dest-prov-form-label">Contact Person Full Name</label>
            <input
              type="text"
              required
              autoComplete="off"
              placeholder="Contact Person Full Name"
              className="dest-prov-form-textinput input"
            />
          </div>
        </div>
        <div className="dest-prov-form-section">
          <div className="dest-prov-form-col">
            <label className="dest-prov-form-label">Email</label>
            <input
              type="text"
              required
              autoComplete="email"
              placeholder="Email"
              className="dest-prov-form-textinput input"
            />
          </div>
          <div className="dest-prov-form-col">
            <label className="dest-prov-form-label">Phone Number</label>
            <input
              type="number"
              required
              placeholder="Phone Number"
              className="dest-prov-form-textinput input"
            />
          </div>
        </div>
        <div className="dest-prov-form-section">
          <div className="dest-prov-form-col">
            <label className="dest-prov-form-label">Website</label>
            <input
              type="text"
              min="0"
              required
              placeholder="Website"
              className="dest-prov-form-textinput input"
            />
          </div>
          <div className="dest-prov-form-col">
            <label className="dest-prov-form-label">Address</label>
            <input
              type="text"
              required
              autoComplete="address-line1"
              placeholder="Address"
              className="dest-prov-form-textinput input"
            />
          </div>
        </div>
        <div className="dest-prov-form-col">
          <label className="dest-prov-form-label">Services Offered</label>
          <textarea
            placeholder="Services Offered"
            className="dest-prov-form-textarea input"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default DestProvForm;
