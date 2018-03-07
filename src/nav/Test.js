import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';


class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }

export default DetailsScreen