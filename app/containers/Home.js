import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';

import Swipeout from 'react-native-swipeout';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { appStyle } from '../styles';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  LayoutAnimation,
  TouchableOpacity,
  PanResponder,
  StyleSheet,
} = ReactNative;

import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

import FadeInView from './Animations/FadeInView';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { imgURL: require('../resources/images/22jumpstreet.jpg'),

    }
  }

  componentWillMount() {

  }

  _onPress = () => {
    this.props.setStory(this.props.browseStories.category.index, this.props.browseStories.story.index);
    this.setState({imgURL: this.props.browseStories.story.content.imgURL })
    LayoutAnimation.spring();
  }

  render() {
      var swipeoutBtns = [
          {
              text: 'Button'
          }
      ]
    return (
        <Swipeout style={styles.scene} left={swipeoutBtns} right={swipeoutBtns}>
          <TouchableOpacity onPress={this._onPress} underlayColor="white">
            <View>
                <Image source={this.state.imgURL} />
            </View>
          </TouchableOpacity>
        </Swipeout>
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
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
