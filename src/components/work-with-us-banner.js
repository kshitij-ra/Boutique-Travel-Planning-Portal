import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './work-with-us-banner.css'

const WorkWithUsBanner = (props) => {
  return (
    <div
      className={`work-with-us-banner-work-with-us-banner ${props.rootClassName} `}
    >
      <div className="work-with-us-banner-container">
        <div className="work-with-us-banner-container1">
          <h1 className="">{props.heading}</h1>
          <span className="work-with-us-banner-text1">
            <span className="">
              Do you enjoy providing unforgettable experiences?
            </span>
            <br className=""></br>
            <span className="">Look no further. Join us today.</span>
          </span>
        </div>
        <div className="work-with-us-banner-container2">
          <div className="work-with-us-banner-container3">
            <span className="work-with-us-banner-text5">{props.text}</span>
            <div className="work-with-us-banner-container4">
              <Link
                to="/local-guide-reg"
                className="work-with-us-banner-navlink"
              >
                <OutlineButton
                  button1="Local Guide"
                  rootClassName="outline-button-root-class-name"
                  className="work-with-us-banner-component"
                ></OutlineButton>
              </Link>
              <span className="work-with-us-banner-text6">{props.text1}</span>
              <Link
                to="/experience-provider-reg"
                className="work-with-us-banner-navlink1"
              >
                <OutlineButton
                  button1="Experience Provider"
                  rootClassName="outline-button-root-class-name1"
                  className="work-with-us-banner-component1"
                ></OutlineButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

WorkWithUsBanner.defaultProps = {
  heading: 'Work with us!',
  text: 'What is your expertise?',
  text1: 'or',
  rootClassName: '',
}

WorkWithUsBanner.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default WorkWithUsBanner
