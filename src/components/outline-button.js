import React from 'react';
import PropTypes from 'prop-types';
import './outline-button.css';

const OutlineButton = (props) => {
  return (
    <div className={`outline-button-container ${props.rootClassName}`}>
      <button className="outline-button-button button Button" onClick={props.onClick}>
        {props.button1}
      </button>
    </div>
  );
};

OutlineButton.defaultProps = {
  rootClassName: '',
  button1: 'Button',
  onClick: () => {},
};

OutlineButton.propTypes = {
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  onClick: PropTypes.func,
};

export default OutlineButton;
