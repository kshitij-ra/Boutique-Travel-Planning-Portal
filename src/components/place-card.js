import React from 'react'
import PropTypes from 'prop-types'
import OutlineButton from './outline-button'
import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className="place-card-container">
      <img
        alt={props.image_alt}
        src={props.image}
        className="place-card-image"
      />
      <div className="place-card-container1">
        <span className="place-card-text">{props.card_title}</span>
        <span className="place-card-text1">{props.description}</span>
        <OutlineButton onClick={props.on_button_click} button1={props.button_text}></OutlineButton>
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  on_button_click: () => { },
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
  card_title: 'City Name',
  button_text: "Discover place",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCard.propTypes = {
  button_text: PropTypes.string,
  on_button_click: PropTypes.func,
  image: PropTypes.string,
  image_alt: PropTypes.string,
  card_title: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard
