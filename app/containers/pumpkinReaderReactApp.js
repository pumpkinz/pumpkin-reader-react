import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory, fetchNewsItems } from '../actions';
import NewsItems from '../components/NewsItems'

import { Toolbar as MaterialToolbar } from 'react-native-material-design'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DrawerLayoutAndroid,
  ToolbarAndroid
} from 'react-native'

class PumpkinReaderReactApp extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  componentDidMount() {
    console.log('didMount');
    const { dispatch } = this.props
    dispatch(fetchNewsItems('topstories'))
  }

  componentWillReceiveProps(nextProps) {
    console.log('willReceive', this.props, nextProps);
    if (this.props.selectedCategory !== nextProps.selectedCategory) {
      const { dispatch } = this.props
      dispatch(fetchNewsItems(nextProps.selectedCategory));
    }
  }

  openDrawer() {
    this.refs['DRAWER'].openDrawer()
  }

  closeDrawer() {
    this.refs['DRAWER'].closeDrawer()
  }

  handleCategoryClick(category) {
    console.log(category)
    const { dispatch } = this.props
    dispatch(selectCategory(category))
    this.closeDrawer()
  }

  render() {
    const { selectedCategory, newsItems } = this.props

    var navigationView = (
      <View style={{flex: 1}}>
        <View style={{height: 168, backgroundColor: '#ef6c00'}}/>
        <Text style={styles.menuItem} onPress={() => this.handleCategoryClick('topstories')}>Top News</Text>
        <Text style={styles.menuItem} onPress={() => this.handleCategoryClick('newstories')}>Recent News</Text>
      </View>
    );

    return (
      <View style={{flex:1}}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          ref={'DRAWER'}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>

          <MaterialToolbar
            title={this.props.selectedCategory}
            overrides={{backgroundColor: '#ef6c00'}}
            icon='menu'
            onIconPress={this.openDrawer}/>

          <View style={{flex:1, alignItems: 'center', marginTop: 56 + 16, marginLeft: 16, marginRight: 16}}>
            {
              newsItems.length > 0 ? <NewsItems newsItems={newsItems} /> : <Text>Loading</Text>
            }
          </View>
        </DrawerLayoutAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 18,
    height: 48,
    textAlignVertical: 'center'
  }
});

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
