import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ppb2.css";

const PPB2 = (props) => {
  const [tags, setTags] = useState([]);
  const { selectedTags, setSelectedTags } = props;

  useEffect(() => {
    // Dummy API response
    const mockApiResponse = {
      tags: [
        "Beach Paradise",
        "Tropical Getaway",
        "Coastal Escape",
        "Island Adventure",
        "Sun and Sand Retreat",
        "Mountain Retreat",
        "Alpine Wonderland",
        "Peak Exploration",
        "Mountain Adventure",
        "Summit Trek",
        "Desert Oasis",
        "Sand Dunes Expedition",
        "Oasis Discovery",
        "Cultural Journey",
        "Heritage Exploration",
        "Historic Odyssey",
        "Ancient Ruins Expedition",
        "Urban Exploration",
        "Cityscape Discovery",
        "Metropolis Adventure",
        "Lakeside Serenity",
        "Tranquil Waterside",
        "Lakeside Escape",
        "Riverfront Adventure",
        "Rainforest Discovery",
        "Jungle Expedition",
        "Wildlife Safari",
        "Nature Retreat",
        "Countryside Charm",
        "Scenic Countryside",
      ],
    };

    // Simulating a delay to mimic a real API call
    // const delay = setTimeout(() => {
    setTags(mockApiResponse.tags);
    // }, 1000);

    // return () => clearTimeout(delay); // Clear the timeout on unmount

    // Actual fetch logic
    // fetch('YOUR_API_GATEWAY_ENDPOINT/fetchtags')
    //   .then(response => response.json())
    //   .then(data => setTags(data.tags))
    //   .catch(error => console.error('Error fetching tags:', error));
  }, []);

  const handleTagSelection = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
  };

  return (
    <div className={`ppb2-ppb2 ${props.rootClassName} `}>
      <h1 className="ppb2-text">
        Step 1: Choose tags that match your interests.
      </h1>
      <div className="ppb2-container">
        <div className="ppb2-container1">
          {tags.map((tag,index) => (
            <div className="ppb2-checkbox-container" key={index}>
              <input
                type="checkbox"
                value={tag}
                checked={selectedTags.includes(tag)}
                onChange={() => handleTagSelection(tag)}
                className="ppb2-checkbox"
              />
              <span className="">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PPB2.defaultProps = {
  rootClassName: "",
  prev: () => {},
  next: () => {},
};

PPB2.propTypes = {
  rootClassName: PropTypes.string,
  prev: PropTypes.func,
  next: PropTypes.func,
};

export default PPB2;
