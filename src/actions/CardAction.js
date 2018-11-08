import { NavigationActions } from 'react-navigation'
import { ToastAndroid, AsyncStorage } from 'react-native'

import {
  GET_CARDS,
  CARDS_LOADED,
  ADD_CARD,
  ADD_CARD_SUCCESS
} from '@reducers/CardReducer'

function getCards() {
  return {
    type: GET_CARDS
  }
}

function cardsLoaded(cards) {
  return {
    type: CARDS_LOADED,
    cards: cards
  }
}

export function get() {
  return (dispatch) => {
    dispatch(getCards())
    AsyncStorage.getItem('cards', (err, result) => {
      if (!err) {
        dispatch(cardsLoaded(JSON.parse(result)))
      }
    })
  }
}

function addCard() {
  return {
    type: ADD_CARD
  }
}

function addCardSuccess(cards) {
  return {
    type: ADD_CARD_SUCCESS,
    cards: cards
  }
}

export function add(cards) {
  return (dispatch) => {
    dispatch(addCard())
    AsyncStorage.setItem('cards', JSON.stringify(cards), (err) => {
      if (!err) {
        ToastAndroid.show('کارت جدید اضافه شد', ToastAndroid.SHORT)
        dispatch(NavigationActions.navigate({ routeName: 'TabNavigator' }))
        dispatch(addCardSuccess(cards))
      } else {
        ToastAndroid.show('خطا در افزودن کارت', ToastAndroid.SHORT)
      }
    })
  }
}