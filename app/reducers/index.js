import { combineReducers } from 'redux'

import {
  SELECT_CATEGORY, REQUEST_NEWS_ITEMS, RECEIVE_NEWS_ITEMS
} from '../actions'

function selectedCategory(state = 'topstories', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}

function newsItems(state = {
  isFetching: false,
  newsItems: []
}, action) {
  switch(action.type) {
    case REQUEST_NEWS_ITEMS:
      return {...state, isFetching: true}
    case RECEIVE_NEWS_ITEMS:
      return {...state, isFetching: false, newsItems: action.newsItems}
    default:
      return state
  }
}

function newsItemsByCategory(state = { }, action) {
  switch(action.type) {
    case REQUEST_NEWS_ITEMS:
    case RECEIVE_NEWS_ITEMS:
      return { ...state, [action.category]: newsItems(state[action.category], action) }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedCategory,
  newsItemsByCategory
})

export default rootReducer
