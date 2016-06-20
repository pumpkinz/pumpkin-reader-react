export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const REQUEST_NEWS_ITEMS = 'REQUEST_NEWS_ITEMS'
export const RECEIVE_NEWS_ITEMS = 'RECEIVE_NEWS_ITEMS'
export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY'
export const SELECT_NEWS_ITEM = 'SELECT_NEWS_ITEM'

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category
  }
}

export function requestNewsItems(category) {
  return {
    type: REQUEST_NEWS_ITEMS,
    category
  }
}

function receiveNewsItems(category, newsItems) {
  return {
    type: RECEIVE_NEWS_ITEMS,
    category,
    newsItems
  }
}

export function fetchNewsItems(category) {
  return dispatch => {
    dispatch(requestNewsItems(category))
    return fetch(`https://hacker-news.firebaseio.com/v0/${category}.json`)
      .then(response => response.json())
      .then(ids => {
          return Promise.all(ids.slice(0,10).map(
            id => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                  .then(response => response.json())
              }
            )
          );
        }
      )
      .then(newsItems => dispatch(receiveNewsItems(category, newsItems)))
  }
}
