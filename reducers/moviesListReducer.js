const initialState = {
  getMovieListState: [],
}

export default function movieListReducer(state = initialState, action) {
  switch (action.type){
    case 'GET_MOVIE_LIST':
      return { ...state,  isLoading: true };
    case 'GET_MOVIE_LIST_SUCCESS':
      return { ...state, isLoading: false, getMovieListState: action.payload ? action.payload.data : [] };
    case 'GET_MOVIE_LIST_FAIL':
      let personalError = action.error.data ? action.error.data :  action.error
      return { ...state, isLoading: false, getMovieListState: personalError };

    case 'CLEAR_DATA':
      return initialState
      
    default:
      return state;
  }
}

export function getMovieList() {
  return {
    type: 'GET_MOVIE_LIST',
    payload: {
      request: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        url: '/pokemon?limit=20'
      }
    }
  };
}