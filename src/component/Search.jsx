import React, { useState} from 'react'

function Search({searchMovies}) {
    const [search,setSearch] = useState('');
    const [type,setType] = useState('all');

    const handleKey = (event) => {
        if(event.key === 'Enter'){
            searchMovies(search, type);
        }
    } 
    const handleType = (event) => {
        setType(() => event.target.dataset.type);
        searchMovies(search, event.target.dataset.type)
    }
  return (
    <div className="row">
          <div className="input-field">
            <input 
            placeholder="Search" 
            type="search" 
            className="validate" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            onKeyDown={handleKey}
            />
          </div>
          <div className="filterdiv">

        <label>
          <input name="filter" type="radio" data-type="all" onChange={handleType} checked = {type === 'all'}/>
          <span>All</span>
        </label>

        <label>
          <input className="with-gap" name="filter" type="radio" data-type="movie" onChange={handleType} checked = {type === 'movie'}/>
          <span>Movies</span>
        </label>

        <label>
          <input className="with-gap" name="filter" type="radio" data-type="series" onChange={handleType} checked = {type === 'series'}/>
          <span>Serials</span>
        </label>

    </div>
      </div>
      
  )
}

export default Search