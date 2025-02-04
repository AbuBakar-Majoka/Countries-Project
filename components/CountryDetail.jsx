import React, { useEffect, useState } from 'react';
import './CountryDetails.css';
import { Link, useLocation, useParams } from 'react-router';
import CountryDetailShimmer from './CountryDetailShimmer';
// import { ThemeContext } from '../contexts/ThemeContext';
import { useWindowsize } from '../hooks/useWindowsize';
import { useTheme } from '../hooks/useTheme';

export default function CountryDetail() {
  const [isDark, setIsDark] = useTheme();
  const params = useParams();
  // const location = useLocation();
  const {state} = useLocation();
  const windowsize = useWindowsize();
  // console.log(location.state);
  // console.log(state);
  // console.log(params);
  // console.log(params.country);
  // const countryName = new URLSearchParams(location.search).get("name");
  // console.log(countryName);
  const [countryData , setCountryData] = useState(null);
  const [notFound , setNotFound] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      name : data.name.common,
      nativeName : Object.values(data.name.nativeName)[0].common,
      population : data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital.join(', '),
      tld: data.tld,

      languages : Object.values(data.languages)
                    .join(', '),

      currencies : Object.values(data.currencies)
                    .map(currency => currency.name)
                    .join(', '),

      flag : data.flags.svg,

      borders : [],

    });

    if (!data.borders) {
      data.borders = [];
    }

    const countriesBorders = data.borders.map(border => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res) => res.json())
      .then(([borderCountries]) => borderCountries.name.common)
    });

    Promise.all(countriesBorders)
      .then(borders => {
        setCountryData((prevState) => ({...prevState , borders}))
        // setTimeout(() => {
        // }, 0);
      })
  }



  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return
    }


    fetch(`https://restcountries.com/v3.1/name/${params.country}?fullText=true`)
      .then(res => res.json())
      .then(data => {
        updateCountryData(data[0]);

      }).catch(e => {
        console.log(e);
        setNotFound(true);
      })
  
  }, [params.country])
  
  if (notFound) {
    return <div>Country not found</div>;
  }
  return (
    countryData === null ? <CountryDetailShimmer /> : (
      <main className={isDark ? "dark" : ""}>
        <h1 style={{textAlign : "center"}}>{windowsize.width} X {windowsize.height}</h1>
        <div className="country-details-container">
          <span className="back-button" onClick={() => history.back()}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={countryData.flag} alt="" />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p><b>Native Name: </b><span className="native-name">{countryData.nativeName}</span></p>
                <p><b>Population: </b><span className="population">{countryData.population}</span></p>
                <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                <p><b>Sub Region: </b><span className="sub-region">{countryData.subregion}</span></p>
                <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
                <p>
                  <b>Top Level Domain: </b><span className="top-level-domain">{countryData.tld}</span>
                </p>
                <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
                <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
              </div>

              {countryData.borders.length !== 0 && <div className="border-countries"><b>Border Countries: </b>&nbsp;
                {
                  countryData.borders.map(border => <Link key={border} to={`/${border}`}> {border} </Link>)
                }
              </div>}

            </div>
          </div>
        </div>
      </main> 
    )
    )
}
