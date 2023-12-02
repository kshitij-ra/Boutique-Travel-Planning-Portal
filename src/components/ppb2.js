import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios'
import "./ppb2.css";

const PPB2 = (props) => {
  const [tags, setTags] = useState([]);
  const { selectedTags, setSelectedTags } = props;

  useEffect(() => {
    const dummyApiResponse = {
      data: {
        tags: [
          ["Beach", "Table Mountain", "Wildlife Safari"],
          ["Geothermal Springs", "Glaciers", "Northern Lights"],
          ["Beach", "Nightlife", "Water Sports"],
          ["Architecture", "Beach", "Romance"],
          ["Adventure", "Mountains", "Skiing"],
          ["Adriatic Sea", "Game of Thrones Filming Locations", "History"],
          ["Beach", "Outdoor Activities", "Wine Regions"],
          ["Architecture", "Beach", "Tapas"],
          ["Hiking", "Mountains", "Wildlife"],
          ["Archaeology", "Hiking", "Inca Civilization"],
          ["Culture", "Gardens", "Temples"],
          ["Beach", "Luxury", "Romance"],
          ["Beach", "Carnival", "Cityscape"],
          ["Beach", "Hiking", "Volcanoes"],
          ["Desert", "Riads", "Souks"]
        ]
      }
    }

    const fetchTags = async () => {
      try {
        const response = await axios.get('https://5kpvhwogal.execute-api.us-east-1.amazonaws.com/getAllTags');
        // const response = dummyApiResponse;
        console.log(response);
        const tagsData = response.data.tags;


        const flattenedTags = tagsData.flat();
        const uniqueTagsSet = new Set(flattenedTags);
        const uniqueTags = [...uniqueTagsSet];

        setTags(uniqueTags);
      } catch (error) {
        console.error('Error fetching or parsing tags:', error);
      }
    };

    fetchTags();
  }, []);

  const handleTagSelection = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
  };

  return (
    <div className={`ppb2-ppb2 ${props.rootClassName}`}>
      <h1 className="ppb2-text">
        Step 1: Choose tags that match your interests.
      </h1>
      <div className="ppb2-container">
        <div className="ppb2-container1">
          {tags.map((tag, index) => (
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
};

PPB2.propTypes = {
  rootClassName: PropTypes.string,
};

export default PPB2;