

import React, { useState, useEffect } from 'react';
import PopulationCart from '../Country-Cart/Population-Cart';
import DisplayCountries from '../ShowCountry/DisplayCountries';
import './Country.css';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState([]);

  const handleAddPopulation = (population) => {
    // console.log('here population', population)
    const newCart = [...cart, population];
    setCart(newCart)
  };
  const handleAddName = (Countryname) => {
    // console.log('here name', Countryname)
    const newCountry = [...name, Countryname];
    setName(newCountry)
  };

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => setCountry(data))
      .catch(error => alert('Something Went Wrong!!! Please Try Again Later'))
  }, []);

  return (
    <div className="countryContainer">
      <div className="countryBox">
        {
          country.map(country => <DisplayCountries key={country.alpha3Code} handleAddPopulation={handleAddPopulation} countries={country} handleAddName={handleAddName} />)
        }
      </div>
      <div className="cartBox">
        <PopulationCart cart={cart} name={name} />
      </div>
    </div>
  );
};

export default Country;

