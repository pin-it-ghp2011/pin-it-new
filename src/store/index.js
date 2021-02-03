import { combineReducers } from 'redux';
import articlesReducer from './articles';

const appReducer = combineReducers({
  articles: articlesReducer,
});

export default appReducer;
