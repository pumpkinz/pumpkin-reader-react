import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewsItems } from '../actions';
import NewsItems from '../components/NewsItems'

import {
  Text,
  View,
  TouchableHighlight,
  DrawerLayoutAndroid
} from 'react-native'

class PumpkinReaderReactApp extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchNewsItems('topstories'))
  }

  openDrawer() {
    const { dispatch } = this.props
    // dispatch(fetchNewsItems('topstories'))
    this.refs['DRAWER'].openDrawer();
  }

  render() {
    const { selectedCategory, newsItems } = this.props
    return (
        <View style={{flex:1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          {
            newsItems.length > 0 ? <NewsItems newsItems={newsItems} /> : <Text>Empty</Text>
          }
        </View>
    );
  }
}

PumpkinReaderReactApp.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  newsItems: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const { selectedCategory, newsItemsByCategory } = state
  const { newsItems } = newsItemsByCategory[selectedCategory] || { newsItems: [] }

  return {
    selectedCategory,
    newsItems
  }
}

export default connect(mapStateToProps)(PumpkinReaderReactApp)
