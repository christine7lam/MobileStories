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

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { imgURL: require('../resources/images/22jumpstreet.jpg'), index: 0}
  }

  _onPressButton = () => {
    this.props.setStory("On Now", this.props.browseStories.story.index);
    let nextImg = this.props.browseStories.story.content.imgURL+ '';
    this.setState({imgURL: this.props.browseStories.story.content.imgURL })
  }

  render() {
    let imgURL = require('../resources/images/22jumpstreet.jpg');
    return (
      <View style={styles.scene}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View>
            <Image source={this.state.imgURL} />
          </View>
        </TouchableHighlight>
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
