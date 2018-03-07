import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, TextInput  } from 'react-native';
// import { AppLoading, Asset, Font } from 'expo';
// import { Ionicons } from '@expo/vector-icons';


//importing aws amplify for user auth
import Amplify, { Auth } from 'aws-amplify'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    username:'',
    password:'',
    authCode: '',
    user: {}
  };

  //adding signup and confirm user
  signIn(){
    const { username, password } = this.state
    Auth.signIn(username, password)
    .then(user => {
      this.setState({ user })
      console.log('Successful sign-in')
    })
    .catch(err => {
      console.log('Error signing in: ', err)
    })
  } // signup ends here

  confirmSignIn(){
    Auth.confirmSignIn(this.state.user, this.state.authCode)
    .then(() => {
      console.log('Successful sign-in confirmation')
      this.props.screenProps.authenticate(true)
    })
    .catch(err => {
      console.log('Error confirming sign-in: ', err)
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
            placeholder='Password'
            onChangeText={value => this.onChangeText('password', value)}
            secureTextEntry={true}
            style={styles.input}
          />
          <Button title='Sign In' onPress={this.signIn.bind(this)} />
          <TextInput 
            placeholder='Input Code'
            onChangeText={value => this.onChangeText('authCode', value)}
            style={styles.input}
          />
          <Button title='Confirm Sign In' onPress={this.confirmSignIn.bind(this)} />
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
