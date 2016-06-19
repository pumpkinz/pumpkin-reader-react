import React, { PropTypes, Component } from 'react'

export default class NewsItems extends Component {
  render() {
    return (
      <ul>
        {
          this.props.newsItems.map(
            (newsItem, i) => <li key={i} style={{marginTop: 8}}>{newsItem.title}</li>
          )
        }
      </ul>
    )
  }
}

NewsItems.propTypes = {
  newsItems: PropTypes.array.isRequired
}
