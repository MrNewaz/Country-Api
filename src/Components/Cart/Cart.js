import React from 'react';

const Cart = (props) => {
  const total = props.cart.reduce((tot, car) => tot + car.population, 0);
  return (
    <div>
      <h2>{props.cart.length}</h2>
      <h3>Population: {total}</h3>
    </div>
  );
};

export default Cart;
