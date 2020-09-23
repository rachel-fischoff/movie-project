import { combineReducers } from "redux";
import MoviesReducer from "./reducer-movies";
import TotalPagesReducer from "./reducer-total-pages";
import AuthReducer from './reducer-auth';
import WatchListReducer from './reducer-watch-list'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  total_pages: TotalPagesReducer,
  form: formReducer,
  auth: AuthReducer,
  watch_list: WatchListReducer
});

export default rootReducer;
