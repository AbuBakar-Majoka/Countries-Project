import React from 'react'

export default function SelectMenu({setContinent}) {
  return (
    <select className='filter-by-region' onChange={e => setContinent(e.target.value)}>
        <option hidden = "">Filter by reigon</option>
        <option value = "Africa">Africa</option>
        <option value = "South America">South America</option>
        <option value = "North America">North America</option>
        <option value = "Asia">Asia</option>
        <option value = "Europe">Europe</option>
        <option value = "Antarctica">Antarctica</option>
        <option value = "Oceania">Oceania</option>
    </select>
  )
}
