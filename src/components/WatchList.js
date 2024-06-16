import React from 'react'
import { useSearchContext } from '../context/SearchContext'
import '../css/WatchList.css'
export const WatchList = () => {
  const {watchlist,dispatch} = useSearchContext();



  return (
  
   <div className="main">
   {
    watchlist.map((movie)=>{
      return(
        <div className="card" key={movie.imdbID}>
           <div className='image'>
            <img src={movie.Poster} alt="" className="img"/>
            <div className="icons">
              <i className="fa-solid fa-eye-slash" onClick={()=>{dispatch({type:'MOVE_TO_WATCHED',payload:{imdbID:movie.imdbID,Poster:movie.Poster,Title:movie.Title}})}}></i>
              <i className="fa-solid fa-remove"   onClick={()=>{dispatch({type:'REMOVE_MOVIE_FROM_WATCHLIST',payload:movie.imdbID})}}></i>
           </div>
          </div>
           <h3>{movie.Title}</h3>
        </div>
      )
      
    })
   }
    </div>
  )
}
