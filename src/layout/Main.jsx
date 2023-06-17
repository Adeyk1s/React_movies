import React, { useEffect, useState} from 'react'
import CartList from '../component/CartList'
import PreLoader from '../component/PreLoader';
import Search from '../component/Search';

function Main() {
    const [movieState,setMovieState] = useState();
    const [loading,setLoading] = useState(true);
    
  useEffect(()=>{
  const apiUrl = 'http://www.omdbapi.com/?apikey=9ae15050&s=matrix';
  fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          setMovieState(data.Search);
          setLoading(false);
      });
      
  }, [setMovieState])
  const searchMovies = (movie, type='all') => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=9ae15050&s=${movie}${type !== 'all' ? `&type=${type}` : '' }`)
      .then((response) => response.json())
      .then((data) => {
          setMovieState(data.Search);
          setLoading(false);
      });
  }

  return (
    <div className='container content'>
        <Search searchMovies={searchMovies}/>
        {loading ? <PreLoader/> : <CartList movie={movieState}/>}
    </div>
  )
}

export default Main