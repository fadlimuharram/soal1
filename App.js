import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Pickup from './components/Pickup/Pickup';
import ConfirmHome from './components/Confirm/ConfirmHome';

const RootStack = createStackNavigator(
  {
    Pickup: Pickup,
    ConfirmHome: ConfirmHome,
  },
  {
    initialRouteName: 'ConfirmHome',
  }
);


export default class CardExample extends Component {

  render() {
    return (

      <RootStack />

    );
  }
}
