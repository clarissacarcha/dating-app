const initialState = {
  getPokemonListState: [],
}

export default function movieListReducer(state = initialState, action) {
  switch (action.type){
    case 'GET_POKEMON_LIST':
      return { ...state,  isLoading: true };
    case 'GET_POKEMON_LIST_SUCCESS':
      return { ...state, isLoading: false, getPokemonListState: action.payload ? action.payload.data : [] };
    case 'GET_POKEMON_LIST_FAIL':
      let error = action.error.data ? action.error.data : action.error
      return { ...state, isLoading: false, getPokemonListState: error };

    case 'CLEAR_DATA':
      return initialState
      
    default:
      return state;
  }
}

export function getPokemonList() {
  return {
    type: 'GET_POKEMON_LIST',
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