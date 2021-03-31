import React from 'react';

const Country = (props) => {
  const { name } = props.country;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Country;
