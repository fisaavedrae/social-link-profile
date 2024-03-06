import React from "react";
import PropTypes from "prop-types";

const BotonSocial = ({ texto }) => {
  return (
    <div>
      <button className="btn btn-social">{texto}</button>
    </div>
  );
};

BotonSocial.propTypes = {};

export default BotonSocial;
