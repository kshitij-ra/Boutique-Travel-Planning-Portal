import React from 'react'

import PropTypes from 'prop-types'

import './place-card-no-button.css'

const PlaceCardNoButton = (props) => {
  return (
    <div className={`place-card-no-button-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className="place-card-no-button-image"
      />
      <div className="place-card-no-button-container1">
        <span className="place-card-no-button-text">{props.card_title}</span>
        <span className="place-card-no-button-text1">{props.description}</span>
        <span className="place-card-no-button-text2">{props.description1}</span>
      </div>
    </div>
  )
}

PlaceCardNoButton.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  card_title: 'Card Title',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  rootClassName: '',
  image_alt: 'image',
  description1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCardNoButton.propTypes = {
  description: PropTypes.string,
  card_title: PropTypes.string,
  image: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  description1: PropTypes.string,
}

export default PlaceCardNoButton
