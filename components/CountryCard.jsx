import React from 'react'
import { Link } from 'react-router';

export default function CountryCard({name , flag , population, region, capital, data }) {
  // console.log(data);
  // const href = `/country?name=${name}`;
  const href = `/${name}`;

  return (
    <Link className='country-card' to={href} state={ data }>
        <img src={flag} alt={`${name} flag`} />
        <div className='card-text'>
            <h3 className='card-title'> {name} </h3>
            <p><b>Population: </b> {population} </p>
            <p><b>Reigon: </b> {region} </p>
            <p><b>Capital: </b> {capital} </p>
        </div>
    </Link>
  )
}
