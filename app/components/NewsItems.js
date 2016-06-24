import React, { PropTypes, Component } from 'react'
import {
  Text,
  View
} from 'react-native'

export default class NewsItems extends Component {
  render() {
    return (
      <View>
        {
          this.props.newsItems.map(
              (newsItem, i) => <Text key={i} style={{marginTop: 8}}>{newsItem.title}</Text>
          )
        }
      </View>
    )
  }
}

NewsItems.propTypes = {
  newsItems: PropTypes.array.isRequired
}
