import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { appStyle } from '../styles';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

import FadeInView from './Animations/FadeInView';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { imgURL: require('../resources/images/22jumpstreet.jpg')}
  }

  _onPressButton = () => {
    this.props.setStory(this.props.browseStories.category.index, this.props.browseStories.story.index);
    this.setState({imgURL: this.props.browseStories.story.content.imgURL })
  }

  render() {
    return (
      <View style={styles.scene}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: '#ccc'}}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <Image source={this.state.imgURL} />
          </TouchableHighlight>
        </FadeInView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  searchSection: {
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
  },
  scrollSection: {
    flex: 0.8
  },
  searchButton: {
    flex: 0.3,
  },
  searchInput: {
    flex: 0.7,
  },
});

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
    browseStories: state.browseStories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
