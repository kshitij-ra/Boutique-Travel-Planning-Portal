import React from 'react'

import OutlineButton from './outline-button'
import SolidButton from './solid-button'
import './add-new-guide-form.css'

const AddNewGuideForm = (props) => {
  return (
    <div className="add-new-guide-form-add-new-guide-form">
      <h1 className="add-new-guide-form-text">Add Local Guide</h1>
      <form className="add-new-guide-form-form">
        <div className="add-new-guide-form-container">
          <div className="add-new-guide-form-form-image-container">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="add-new-guide-form-image"
            />
            <OutlineButton
              button="Choose Image"
              button1="Choose Image"
              rootClassName="outline-button-root-class-name3"
            ></OutlineButton>
          </div>
          <div className="add-new-guide-form-container1">
            <label className="add-new-guide-form-text1">Full Name</label>
            <input
              type="text"
              name="Full Name"
              required
              placeholder="e.g. John Doe"
              className="add-new-guide-form-textinput input"
            />
            <label className="add-new-guide-form-text2">Location</label>
            <input
              type="text"
              name="Location"
              required
              placeholder="Destination at which the local guide offers their service"
              className="add-new-guide-form-textinput1 input"
            />
            <SolidButton
              button="Add Local Guide"
              rootClassName="solid-button-root-class-name11"
            ></SolidButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddNewGuideForm
