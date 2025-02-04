import React from 'react'
import './CountriesListShimmer.css'

export default function CountriesListShimmer() {

    // const arr = new Array(10);
    // for (let i = 0; i < arr.length; i++) {
    //     arr.fill(<div key={i} className="country-card shimmer-card"></div>);
    //     console.log(i);
    // }
    const mapped = Array.from({length : 10}).map((elem, i) => {
                        return <div key={i} className="country-card shimmer-card"></div>;
                    })

    // console.log(mapped);
  return (
    <div className='countries-container'>
        {mapped}
    </div>
  )
}
