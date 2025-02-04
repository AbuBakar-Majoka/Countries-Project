import React, { useState } from 'react'
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';
// import { useOutletContext } from 'react-router';
// import { ThemeContext } from '../contexts/ThemeContext';
import { useWindowsize } from '../hooks/useWindowsize';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
  const [query , setQuery] = useState("");
  const [continent, setContinent] = useState("");
  // const [isDark, setIsDark] = useOutletContext();
  const [isDark, setIsDark] = useTheme();
  // console.log(isDark, setIsDark);
  const windowsize = useWindowsize();

  return (
    <main className={isDark ? "dark" : ""}>
      <div className='search-filter-container'>
        <SearchBar setQuery = {setQuery} />
        <SelectMenu setContinent = {setContinent}/>
      </div>
      <h1 style={{textAlign : "center"}}>{windowsize.width} X {windowsize.height}</h1>
      <CountriesList query = {query} continent = {continent} />
    </main>
  )
}
