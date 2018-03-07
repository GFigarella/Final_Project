import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, TextInput  } from 'react-native';

import Amplify, { Auth } from 'aws-amplify'


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    username:'',
    password:'',
    phone_number:'',
    email:'',
    authCode: ''
  };

  //adding signup and confirm user
  signUp(){
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes:{
        phone_number: this.state.phone_number,
        email: this.state.email
      }
    })
    .then(res => {
      console.log('Successful Sign-Up', res)
    })
    .catch(err => {
      console.log('Error signing up: ', err)
    })
  } // signup ends here

  confirmUser(){
    Auth.confirmSignUp(this.state.username, this.state.authCode)
    .then(res => {
      console.log('Successful confirmation', res)
    })
    .catch(err => {
      console.log('Error confirming user: ', err)
    })
  } //confirm user ends here


  onChangeText(key, value){
    this.setState({
      [key]: value
    })
  } //onChangeText ends here


  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } 
    // else { 
      return (
        <View style={styles.container}>
          {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation /> */}
          <TextInput 
            placeholder='Username'
            onChangeText={value => this.onChangeText('username', value)}
            style={styles.input}
          />
          <TextInput 
            placeholder='Password. 1 Capital Letter, 1 Number and 1 Symbol'
            onChangeText={value => this.onChangeText('password', value)}
            secureTextEntry={true}
            style={styles.input}
          />
          <TextInput 
            placeholder='Phone Number'
            onChangeText={value => this.onChangeText('phone_number', value)}
            style={styles.input}
          />
          <TextInput 
            placeholder='Email Address'
            onChangeText={value => this.onChangeText('email', value)}
            style={styles.input}
          />
          <Button title='Sign Up' onPress={this.signUp.bind(this)} />
          <TextInput 
            placeholder='Input Code'
            onChangeText={value => this.onChangeText('authCode', value)}
            style={styles.input}
          />
          <Button title='Confirm User' onPress={this.confirmUser.bind(this)} />
        </View>
      );
    // }
  }
}

const styles = StyleSheet.create({
  text: { color: undefined },
  input:{
    height: 50,
    backgroundColor: '#ededed',
    borderBottomWidth: 2,
    borderBottomColor: '#311B92',
    marginVertical: 10,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
