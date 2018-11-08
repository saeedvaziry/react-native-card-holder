export const GET_CARDS = 'GET_CARDS'
export const CARDS_LOADED = 'CARDS_LOADED'
export const ADD_CARD = 'ADD_CARD'
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS'

const initialState = {
  loaded: false,
  cards: [],
  adding: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        loaded: false,
      }
    case CARDS_LOADED:
      return {
        ...state,
        loaded: true
      }
    case ADD_CARD:
      return {
        ...state,
        adding: true
      }
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        cards: action.cards,
        adding: false
      }
    default:
      return state
  }
}