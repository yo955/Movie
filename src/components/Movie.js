import '../css/Movie.css'
import { useSearchContext } from '../context/SearchContext'
import { type } from '@testing-library/user-event/dist/type';

const Movie = ({imdbID,Poster,Title }) => {
  const {watched,watchlist,dispatch} = useSearchContext();
  const storeWatched = watched.find(item=> item.imdbID == imdbID)
  const disabledWatched = storeWatched?true:false

  const StoreWatchList = watchlist.find(item=> item.imdbID == imdbID)
  const disabledWatchList = StoreWatchList?true:storeWatched?true:false
  

  return (
    <>
     <div className='container card' >
             <img src={Poster} alt='' className='imgposter'/>
             <div>
               <h2>{Title}</h2>
             </div>
             <div className='btnWatched'>
              <button disabled={disabledWatchList}  onClick={()=>{dispatch({type:'ADD_MOVIE_TO_WATCHED',payload:{imdbID,Poster,Title}})}}>AddToWatcheList</button>
              <button disabled={disabledWatched}   onClick={()=>{dispatch({type:'ADD_MOVIE_TO_WATCHLIST',payload:{imdbID,Poster,Title}})}}>AddToWatched</button>
             </div>
             <hr style={{padding:"10px"}}/>
      </div>
           
    </>
  )
}
export default Movie;
