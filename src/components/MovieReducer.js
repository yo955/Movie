

export const reducer = (state, action) => {
  switch (action.type) {

    case "ADD_MOVIE_TO_WATCHED":
      return { ...state, watched: [...state.watched, action.payload] };
      break;

      case "REMOVE_MOVIE_FROM_WATCHED":
        return {...state,watched:state.watched.filter((item)=>item.imdbID!=action.payload)};
        break;
      case "MOVE_TO_WATCHED":
          return {...state,watchlist:state.watchlist.filter((item)=>item.imdbID!=action.payload.imdbID),watched:[...state.watched,action.payload]};
          break;
          case "ADD_MOVIE_TO_WATCHLIST":
            return { ...state, watchlist: [...state.watchlist, action.payload] };
            break;
      case "REMOVE_MOVIE_FROM_WATCHLIST":
        return {...state,watchlist:state.watchlist.filter((item)=>item.imdbID!=action.payload)};
        break;
        case "MOVE_TO_WATCHLIST":
          return {...state,watched:state.watched.filter((item)=>item.imdbID!=action.payload.imdbID),watchlist:[...state.watchlist,action.payload]};
          break;
          default:
            return state;
  }
};
