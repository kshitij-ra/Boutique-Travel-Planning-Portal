import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './add-remove-button.css';
const AddRemoveButton = (props) => {
  const [isAdding, setIsAdding] = useState(true);

  const handleClick = () => {
    setIsAdding((prevState) => !prevState);
    props.onClick();
  };

  return (
    <div className={`add-remove-button-container add-remove-button-x-margin ${props.rootClassName}`}>
      <button
        className={`add-remove-button-button button Button ${isAdding ? 'add-mode' : 'remove-mode'}`}
        onClick={handleClick}
      >
        {isAdding ? `+ Add ${props.buttonText}` : `- Remove ${props.buttonText}`}
      </button>
    </div>
  );
};

AddRemoveButton.defaultProps = {
  rootClassName: '',
  buttonText: "",
  onClick: () => {},
};

AddRemoveButton.propTypes = {
  rootClassName: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
};

export default AddRemoveButton;
