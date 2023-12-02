import React from 'react'

import './guide-form.css'

const GuideForm = (props) => {
  return (
    <div className="guide-form-container">
      <form className="guide-form-form">
        <div className="guide-form-row">
          <div className="guide-form-cold">
            <label className="guide-form-label">First Name</label>
            <input
              type="text"
              required
              autoComplete="name"
              placeholder="First Name"
              className="guide-form-textinput input"
            />
          </div>
          <div className="guide-form-cold">
            <label className="guide-form-label">Last Name</label>
            <input
              type="text"
              required
              autoComplete="family-name"
              placeholder="Last Name"
              className="guide-form-textinput input"
            />
          </div>
        </div>
        <div className="guide-form-row">
          <div className="guide-form-cold">
            <label className="guide-form-label">Email</label>
            <input
              type="text"
              required
              autoComplete="email"
              placeholder="Email"
              className="guide-form-textinput input"
            />
          </div>
          <div className="guide-form-cold">
            <label className="guide-form-label">Phone Number</label>
            <input
              type="number"
              required
              placeholder="Phone Number"
              className="guide-form-textinput input"
            />
          </div>
        </div>
        <div className="guide-form-cold">
          <label className="guide-form-label">Location</label>
          <input
            type="text"
            required
            placeholder="Location"
            className="guide-form-textinput input"
          />
        </div>
        <div className="guide-form-row">
          <div className="guide-form-cold">
            <label className="guide-form-label">Experience</label>
            <input
              type="number"
              min="0"
              required
              placeholder="Experience (in years)"
              className="guide-form-textinput input"
            />
          </div>
          <div className="guide-form-cold">
            <label className="guide-form-label">
              Previous Experience Field
            </label>
            <input
              type="text"
              required
              placeholder="Previous Experience Field"
              className="guide-form-textinput input"
            />
          </div>
        </div>
        <div className="guide-form-cold">
          <label className="guide-form-label">Language Skills</label>
          <input
            type="text"
            required
            placeholder="Languages Spoken"
            className="guide-form-textinput input"
          />
        </div>
        <div className="guide-form-cold">
          <label>Motivation</label>
          <textarea
            placeholder="What motivates you to work as guide?"
            className="guide-form-textarea input"
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default GuideForm
