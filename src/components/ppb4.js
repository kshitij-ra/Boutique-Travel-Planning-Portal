import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import PlaceCardAddRemove from './place-card-add-remove';
import LoadingSpinner from './loading-spinner.js';
import './ppb4.css';
import { gitHubIssueUrl } from '@craco/craco';

const PPB4 = (props) => {
  const [guides, setGuides] = useState([]);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const { selectedGuides, setSelectedGuides } = props;
  const { selectedDestinations, setSelectedDestinations } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mockApiResponse = [
      {
        "GuideID": 1,
        "GuideName": "Lila Tahitian",
        "Location": "Bora Bora, French Polynesia",
        "CustomerRating": 9.1,
        "ProfilePhotoLink": "https://example.com/lila_tahitian.jpg"
      },
      {
        "GuideID": 2,
        "GuideName": "Kai Adventure Guide",
        "Location": "Queenstown, New Zealand",
        "CustomerRating": 8.5,
        "ProfilePhotoLink": "https://example.com/kai_adventure.jpg"
      },
      {
        "GuideID": 3,
        "GuideName": "Nikos Santorini Explorer",
        "Location": "Santorini, Greece",
        "CustomerRating": 9.3,
        "ProfilePhotoLink": "https://example.com/nikos_santorini.jpg"
      },
      {
        "GuideID": 4,
        "GuideName": "Banff Wilderness Expert",
        "Location": "Banff National Park, Canada",
        "CustomerRating": 8.8,
        "ProfilePhotoLink": "https://example.com/banff_wilderness.jpg"
      },
      {
        "GuideID": 5,
        "GuideName": "Rio Rhythms Guide - Carlos",
        "Location": "Rio de Janeiro, Brazil",
        "CustomerRating": 9.2,
        "ProfilePhotoLink": "https://example.com/carlos_rio_rhythms.jpg"
      },
      {
        "GuideID": 6,
        "GuideName": "Kyoto Wanderer - Sakura",
        "Location": "Kyoto, Japan",
        "CustomerRating": 9.4,
        "ProfilePhotoLink": "https://example.com/sakura_kyoto_wanderer.jpg"
      },
      {
        "GuideID": 7,
        "GuideName": "Cape Town Safari Master - Nala",
        "Location": "Cape Town, South Africa",
        "CustomerRating": 8.7,
        "ProfilePhotoLink": "https://example.com/nala_cape_town_safari.jpg"
      },
      {
        "GuideID": 8,
        "GuideName": "Icelandic Adventures with Ólafur",
        "Location": "Reykjavik, Iceland",
        "CustomerRating": 9.0,
        "ProfilePhotoLink": "https://example.com/olafur_icelandic_adventures.jpg"
      },
      {
        "GuideID": 9,
        "GuideName": "Barcelona Explorer - Elena",
        "Location": "Barcelona, Spain",
        "CustomerRating": 8.9,
        "ProfilePhotoLink": "https://example.com/elena_barcelona_explorer.jpg"
      },
      {
        "GuideID": 10,
        "GuideName": "Phuket Paradise Guide - Aum",
        "Location": "Phuket, Thailand",
        "CustomerRating": 8.6,
        "ProfilePhotoLink": "https://example.com/aum_phuket_paradise.jpg"
      },
      {
        "GuideID": 11,
        "GuideName": "Marrakech Magic - Ahmed",
        "Location": "Marrakech, Morocco",
        "CustomerRating": 8.4,
        "ProfilePhotoLink": "https://example.com/ahmed_marrakech_magic.jpg"
      },
      {
        "GuideID": 12,
        "GuideName": "Perth Discovery - Matilda",
        "Location": "Perth, Australia",
        "CustomerRating": 7.8,
        "ProfilePhotoLink": "https://example.com/matilda_perth_discovery.jpg"
      },
      {
        "GuideID": 13,
        "GuideName": "Machu Picchu Explorer - Juan",
        "Location": "Machu Picchu, Peru",
        "CustomerRating": 9.3,
        "ProfilePhotoLink": "https://example.com/juan_machu_picchu_explorer.jpg"
      },
      {
        "GuideID": 14,
        "GuideName": "Dubrovnik Heritage Guide - Mara",
        "Location": "Dubrovnik, Croatia",
        "CustomerRating": 8.6,
        "ProfilePhotoLink": "https://example.com/mara_dubrovnik_heritage.jpg"
      },
      {
        "GuideID": 15,
        "GuideName": "Maui Adventures - Keoni",
        "Location": "Maui, Hawaii, USA",
        "CustomerRating": 8.9,
        "ProfilePhotoLink": "https://example.com/keoni_maui_adventures.jpg"
      }
    ]
    const filterGuides = async () => {

      try {
        setLoading(true);
        const response = await axios.get('https://5kpvhwogal.execute-api.us-east-1.amazonaws.com/getAllGuides');
        // const response = mockApiResponse;
        setGuides(response.data);
        // setGuides(response);
        const filtered = guides.filter((guide) =>
          selectedDestinations.some((destination) =>
            guide.Location.includes(destination)
          )
        );
        console.log('Filtered Guides:', filtered);
        setFilteredGuides(filtered);
      } catch (error) {
        console.error('Error fetching local guides', error);
      } finally {
        setLoading(false);
      }
    };

    filterGuides();
  }, [selectedDestinations]);

  const handleGuideSelection = (guide) => {
    const updatedGuides = selectedGuides.includes(guide) ?
      selectedGuides.filter((selectedGuide) => selectedGuide !== guide) :
      [...selectedGuides, guide];
    setSelectedGuides(updatedGuides);
  };

  return (
    <div className={`ppb4-ppb4`}>
      <h1 className="ppb4-text">Step 3: Choose Local Guides</h1>
      <div className="ppb4-container">
        {selectedDestinations.length === 0 ? (<h1>Please choose destinations first.</h1>) : (
          <div className="ppb4-cards-container">
            {!loading ? (
              <>
                {filteredGuides.map((guide) => (
                  <div key={guide.GuideID}>
                    <PlaceCardAddRemove
                      image={guide.ProfilePhotoLink}
                      card_title={guide.GuideName}
                      description={guide.Location}
                      description1={guide.CustomerRating}
                      on_button_click={() => {
                        handleGuideSelection(guide);
                      }}
                      buttonText="Guide"
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

export default PPB4;
