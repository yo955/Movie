import { createContext, useContext,useReducer,useEffect} from "react";

import {reducer} from '../components/MovieReducer'


const initialState =localStorage.getItem('state')?JSON.parse(localStorage.getItem('state')):({
  watchlist: [],
  watched: [],
});

export const SearchInputData = createContext({});
export default function SearchInputvalue({children}){
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        localStorage.setItem('state',JSON.stringify({watched:state.watched,watchlist:state.watchlist}))
    },[state])
   
    return( 

        <SearchInputData.Provider value={{watched:state.watched,watchlist:state.watchlist,dispatch}}>
            {children}
        </SearchInputData.Provider>
    )
}
export const useSearchContext = () => {
    return(
        useContext(SearchInputData)
    )
}