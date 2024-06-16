//css file
import '../css/AddMovies.css'
//context
//hooks
import React , { useEffect, useState } from 'react'
import  Move  from './Movie'
import axios from 'axios'

export const AddMovies = () => {
 
  const [searchInput,setSearchInput] = useState('');
  const[movies,setMovies] = useState([])


    useEffect(()=>{
      axios.get( `https://www.omdbapi.com/?s=${searchInput}&apikey=3cfd7dd7`)
   
      .then((response)=>{
          try{
              setMovies([...response.data.Search])
          } catch{
              setMovies([])
          }
  
      })
    },[movies])
  
  return (
  <>
  
    <div className='flex' style={{marginTop:"50px"}}>
        <input 
        value={searchInput}
        onChange={(e)=>{
          setSearchInput(e.target.value);
        }}
        className='SearchInput'
        placeholder="Search for a movie"
        />
    </div>
        
    {movies.length > 0 ? movies.map((movie)=>{
      return(
        (
          <Move key={movie.imdbID} {...movie}/>
         ))}):'notFound'}
  </>
  )
}
