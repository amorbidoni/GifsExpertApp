import React from "react";
import PropTypes from "prop-types";
const GifGridItemApp = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img alt={title} src={url} />
      <p>{title}</p>
    </div>
  );
};
GifGridItemApp.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItemApp;
