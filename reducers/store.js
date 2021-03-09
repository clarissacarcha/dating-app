
import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import multiClientMiddleware from 'redux-axios-middleware';
import pokemonListReducer from './pokemonListReducer';

// Combine all reducer files and add keys.
const appReducer = combineReducers({
  pokemonListReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined
  }
  return appReducer(state, action)
}

const CLIENT = axios.create({
  method: 'GET',
  baseURL: 'https://pokeapi.co/api/v2',
  responseType: 'json'
});

const STORE = createStore(rootReducer, applyMiddleware(multiClientMiddleware(CLIENT)));

export default STORE