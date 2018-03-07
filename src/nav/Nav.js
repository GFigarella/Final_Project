import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from './Home'
import DetailsScreen from './Test';

const routeConfig = {
  Home: { screen: Home, },
  Details: { screen: DetailsScreen, },
}

const StackNav = StackNavigator(routeConfig, { initialRouteName: 'Home',})

class Nav extends React.Component {
  render() {
    return (
      <StackNav />
    )
  }
}

export default StackNav
