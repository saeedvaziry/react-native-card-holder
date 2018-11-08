import { combineReducers } from 'redux'
import CardReducer from './CardReducer'
import NavReducer from './NavReducer'

const AppReducer = combineReducers({
  nav: NavReducer,
  card: CardReducer
});

export default AppReducer