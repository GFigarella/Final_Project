import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

//redux
import { connect } from 'react-redux'

//importing aws amplify for user auth
import Amplify, { Auth } from 'aws-amplify'
// import config from './src/aws-exports'
// Amplify.configure(config)

import Tabs from './auth/Tabs'
import Nav from './nav/Nav'

class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true)
  }

  render(){
    let loggedIn = false;
    if (Auth.user){
      const { user: { signInUserSession: { accessToken: { payload: { exp, iat }}}}} = Auth
      if (iat < exp) loggedIn = true;
    }
    if (loggedIn){
      return (
        <Nav />
      )
    }
    return (
      <Tabs />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps) (App);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
