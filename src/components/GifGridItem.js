import React from "react";
const GifGridItemApp = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img alt={title} src={url} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItemApp;
