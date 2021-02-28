
import React from 'react';
import './Display.css'
const DisplayCountries = (props) => {
  // console.log(props)
  const { name, flag, capital, region, area, population } = props.countries
  return (
    <div className="DisplayCountries">
      <div className="flagBox">
        <img src={flag} alt="" />
      </div>
      <div className="contentBox">
        <h4>{name}</h4>
        <h6>{capital}</h6>
        <small>Region {region}</small><br />
        <small>Area {area} </small>
        <p>Population {population}</p>
        <button onClick={() => {
          props.handleAddPopulation(props.countries.population)
          props.handleAddName(props.countries.name)
        }} className="add-btn ">Add Population</button>
      </div>
    </div>
  );
};

export default DisplayCountries;

