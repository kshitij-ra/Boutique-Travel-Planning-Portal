import React from 'react'

import PropTypes from 'prop-types'

import './outline-button.css'

const OutlineButton = (props) => {
  return (
    <div className={`outline-button-container ${props.rootClassName} `}>
      <button className="outline-button-button button Button">
        {props.button1}
      </button>
    </div>
  )
}

OutlineButton.defaultProps = {
  rootClassName: '',
  button1: 'Button',
}

OutlineButton.propTypes = {
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
}

export default OutlineButton
