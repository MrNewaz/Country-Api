import React from 'react';

const Country = (props) => {
  const { name, population, region, flag } = props.country;
  const click = props.handleClick;
  return (
    <div style={{ border: '1px solid black', margin: 10, padding: 10 }}>
      <h1>{name}</h1>
      <img style={{ height: '100px' }} src={flag} alt='' />
      <p>Population : {population}</p>
      <p>Region : {region}</p>
      <button onClick={() => click(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;
