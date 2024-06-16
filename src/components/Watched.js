import { useSearchContext } from "../context/SearchContext"
//images
import '../css/WatchList.css'
export const Watched = () => {
const {watched,dispatch} = useSearchContext()
 

  return (
    <div className="main">
   {
    watched.map((movie)=>{
      return(
        <div className="card" key={movie.imdbID}>
           <div className='image'>
            <img src={movie.Poster} alt="" className="img"/>
            <div className="icons">
              
              <i className="fa-solid fa-eye" onClick={()=>dispatch({type:'MOVE_TO_WATCHLIST',payload:{imdbID:movie.imdbID,Poster:movie.Poster,Title:movie.Title}})}></i>
              <i className="fa-solid fa-remove" onClick={()=>dispatch({type:'REMOVE_MOVIE_FROM_WATCHED',payload:movie.imdbID})}></i>
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
