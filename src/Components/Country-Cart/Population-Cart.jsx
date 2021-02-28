

import React from 'react';
import './Cart.css';
const PopulationCart = (props) => {
  const cart = props.cart;
  const name = props.name;

  let totalPopulation = 0;
  for (let i = 0; i < cart.length; i++) {
    const population = cart[i];
    totalPopulation = totalPopulation + population;
  }

  return (
    <div>
      <p className="cart-length">Added Country : <span>{cart.length}</span></p>
      <p className="cart-population">Total Population : <span>{totalPopulation}</span></p>
      <small style={{fontWeight:"700"}}>Country List</small>
      <small>
        {
          name.map(countryName => <li className='countryList' >{countryName}</li> )
        }
      </small>
    </div>
  );
};

export default PopulationCart;


