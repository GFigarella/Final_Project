import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//importing aws amplify for user auth
import Amplify, { Auth } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import Tabs from './Tabs'

export default class App extends React.Component {
  state = {
    isAuthenticated: false
  };

  authenticate(isAuthenticated){
    this.setState({ isAuthenticated })
  }

  render() {
    if (this.state.isAuthenticated){
      console.log('Auth: ', Auth);
      return (
        <View style={{ flex:1 , justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello {Auth.user.username}!</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Tabs
          screenProps={{
            authenticate: this.authenticate.bind(this)
          }} 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
