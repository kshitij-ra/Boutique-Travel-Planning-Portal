import React from 'react'

import { Helmet } from 'react-helmet'

import './destination-details.css'

const DestinationDetails = (props) => {
  return (
    <div className="destination-details-container">
      <Helmet>
        <title>Destination-Details - T84 Travel Agency</title>
        <meta
          property="og:title"
          content="Destination-Details - T84 Travel Agency"
        />
      </Helmet>
    </div>
  )
}

export default DestinationDetails
