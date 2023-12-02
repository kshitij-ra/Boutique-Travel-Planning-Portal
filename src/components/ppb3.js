import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import PlaceCardAddRemove from './place-card-add-remove';
import LoadingSpinner from './loading-spinner.js';
import './ppb3.css';

const PPB3 = (props) => {
  const { selectedTags, setSelectedTags } = props;
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const { selectedDestinations, setSelectedDestinations } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mockApiResponse = [{ "DestinationID": 7, "DestinationName": "Cape Town, South Africa", "Rating": 8.6, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/cape-town.jpg", "Tags": ["Beach", "Table Mountain", "Wildlife Safari"] }, { "DestinationID": 8, "DestinationName": "Reykjavik, Iceland", "Rating": 9, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/reykjjavik.jfif", "Tags": ["Geothermal Springs", "Glaciers", "Northern Lights"] }, { "DestinationID": 10, "DestinationName": "Phuket, Thailand", "Rating": 8.5, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/Phuket.jpg", "Tags": ["Beach", "Nightlife", "Water Sports"] }, { "DestinationID": 3, "DestinationName": "Santorini, Greece", "Rating": 9.5, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/Santorini.jpg", "Tags": ["Architecture", "Beach", "Romance"] }, { "DestinationID": 2, "DestinationName": "Queenstown, New Zealand", "Rating": 8.7, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/queenstown.jpg", "Tags": ["Adventure", "Mountains", "Skiing"] }, { "DestinationID": 14, "DestinationName": "Dubrovnik, Croatia", "Rating": 8.6, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/Dubrovnik.jpg", "Tags": ["Adriatic Sea", "Game of Thrones Filming Locations", "History"] }, { "DestinationID": 12, "DestinationName": "Perth, Australia", "Rating": 7.9, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/perth.jfif", "Tags": ["Beach", "Outdoor Activities", "Wine Regions"] }, { "DestinationID": 9, "DestinationName": "Barcelona, Spain", "Rating": 8.8, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/barcelona.jfif", "Tags": ["Architecture", "Beach", "Tapas"] }, { "DestinationID": 4, "DestinationName": "Banff National Park, Canada", "Rating": 8.9, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/banff-national-park.jpg", "Tags": ["Hiking", "Mountains", "Wildlife"] }, { "DestinationID": 13, "DestinationName": "Machu Picchu, Peru", "Rating": 9.4, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/Machu-Picchu-Peru.jpg", "Tags": ["Archaeology", "Hiking", "Inca Civilization"] }, { "DestinationID": 6, "DestinationName": "Kyoto, Japan", "Rating": 9.3, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/kyoto.jpg", "Tags": ["Culture", "Gardens", "Temples"] }, { "DestinationID": 1, "DestinationName": "Bora Bora, French Polynesia", "Rating": 9.2, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/bora-bora.jpg", "Tags": ["Beach", "Luxury", "Romance"] }, { "DestinationID": 5, "DestinationName": "Rio de Janeiro, Brazil", "Rating": 9.1, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/rio-de-janerio.jpg", "Tags": ["Beach", "Carnival", "Cityscape"] }, { "DestinationID": 15, "DestinationName": "Maui, Hawaii, USA", "Rating": 9, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/maui-hawaii.jpg", "Tags": ["Beach", "Hiking", "Volcanoes"] }, { "DestinationID": 11, "DestinationName": "Marrakech, Morocco", "Rating": 8.4, "DestinationImageLink": "https://destination-address.s3.amazonaws.com/Marrakech.jfif", "Tags": ["Desert", "Riads", "Souks"] }]

    const filterDestinations = async () => {

      try {
        const response = await axios.get('https://5kpvhwogal.execute-api.us-east-1.amazonaws.com/getAllDestinations');
        // const response = { data: mockApiResponse };

        const filtered = response.data.filter((destination) =>
          destination.Tags.some((tag) => selectedTags.includes(tag))
        );

        console.log('Filtered Destinations:', filtered);
        setFilteredDestinations(filtered);
      } catch (error) {
        console.error('Error fetching destinations', error);
      }
    };

    filterDestinations();
  }, [selectedTags]);

  const handleDestinationSelection = (destination) => {
    const updatedDestinations = selectedDestinations.includes(destination.DestinationName) ?
      selectedDestinations.filter((selectedDestination) => selectedDestination !== destination.DestinationName) :
      [...selectedDestinations, destination.DestinationName];
    setSelectedDestinations(updatedDestinations);
  };


  return (
    <div className={`ppb3-ppb3 ${props.rootClassName}`}>
      <h1 className="ppb3-text">Step 2: Add Destinations To Your Package</h1>
      <div className="ppb3-container">
        {selectedTags.length === 0 ? (<h1>Please choose tags first.</h1>) : (
          <div className="ppb3-cards-container">
            {!loading ? (
              <>
                {filteredDestinations.map((destination) => (
                  <div key={destination.DestinationID}>
                    <PlaceCardAddRemove
                      image={destination.DestinationImageLink}
                      card_title={destination.DestinationName}
                      description={`Rating: ${destination.Rating} / 10`}
                      on_button_click={() => {
                        handleDestinationSelection(destination);
                      }}
                      buttonText="Destination"
                    />
                  </div>
                ))}
              </>
            ) : (
              <LoadingSpinner />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

PPB3.defaultProps = {
  heading: 'Step 2: Add destinations to your package',
  rootClassName: '',
};

PPB3.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default PPB3; 