import React from 'react'

import OutlineButton from './outline-button'
import SolidButton from './solid-button'
import './add-new-destination-form.css'

const AddNewDestinationForm = (props) => {
  return (
    <div className="add-new-destination-form-add-new-destination-form">
      <h1 className="add-new-destination-form-text">Add New Destination</h1>
      <form className="add-new-destination-form-form">
        <div className="add-new-destination-form-container">
          <div className="add-new-destination-form-container1">
            <img
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              alt="image"
              className="add-new-destination-form-image"
            />
            <OutlineButton
              button="Choose Image"
              button1="Choose Image"
              rootClassName="outline-button-root-class-name2"
            ></OutlineButton>
          </div>
          <div className="add-new-destination-form-container2">
            <label>Destination Name</label>
            <input
              type="text"
              name="Destination Name"
              required
              placeholder="e.g. London"
              className="add-new-destination-form-textinput input"
            />
            <label>Customer Rating</label>
            <input
              type="number"
              max="10"
              min="0"
              name="Customer Rating"
              step="0.1"
              required
              placeholder="Rating out of 10"
              className="add-new-destination-form-textinput1 input"
            />
            <label>Tags</label>
            <input
              type="text"
              name="Tags"
              required
              placeholder="Enter tags separated by comma"
              className="add-new-destination-form-textinput2 input"
            />
          </div>
          <SolidButton
            button="Create Destination"
            rootClassName="solid-button-root-class-name10"
          ></SolidButton>
        </div>
      </form>
    </div>
  )
}

export default AddNewDestinationForm
