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

class Home extends Component {
  constructor(props) {
    super(props)
    //this.state = { searching: false, ingredientsInput: '' }
  }

  // searchPressed() {
  //   this.setState({ searching: true })
  //   this.props.fetchRecipes(this.state.ingredientsInput).then( (res) => {
  //     this.setState({searching: false })
  //   });
  // }
  //
  // recipes() {
  //   return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
  // }
  _onPressButton = () => {
    alert("press here");
  }

  render() {
    let imgURL = "";
    return (
      <View style={styles.scene}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View>
            <Image source={require('../resources/images/22jumpstreet.jpg')} />
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
    searchedRecipes: state.searchedRecipes
  };
}

export default connect(mapStateToProps)(Home);
