/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyListView from './components/MyListView'

class RNPlayground extends Component {
  render() {
    return (
      <View style={styles.parent}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    top: 30,
    left: 0,
    right: 0,
    bottom: 0
  }
});

AppRegistry.registerComponent('RNPlayground', () => RNPlayground);
