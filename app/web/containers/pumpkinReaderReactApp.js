import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory, fetchNewsItems } from '../../actions';
import NewsItems from '../components/NewsItems'

class PumpkinReaderReactApp extends Component {
  constructor(props) {
    super(props);
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

  handleCategoryClick(category) {
    console.log(category)
    const { dispatch } = this.props
    dispatch(selectCategory(category))
  }

  render() {
    const { selectedCategory, newsItems } = this.props

    return (
      <div>
        <a href="#" onClick={() => this.handleCategoryClick('topstories')}>Top News</a><br/>
        <a href="#" onClick={() => this.handleCategoryClick('newstories')}>Recent News</a>

        <div>
          {
            newsItems.length > 0 ? <NewsItems newsItems={newsItems} /> : <span>Loading</span>
          }
        </div>
      </div>
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
