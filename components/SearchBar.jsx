import React from 'react'

export default function SearchBar({setQuery}) {
  return (
    <div className='search-container'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type='text' placeholder='Search for country' onChange = {e => setQuery(e.target.value.toLocaleLowerCase())} />
    </div>
  )
}

