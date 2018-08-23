import React, { Component } from 'react';
import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';
const glyphMap = { 'icon-name': 1234, test: '∆' };
const CustomIcon = createIconSet(glyphMap, 'FontName');

export default class CustomIconExample extends Component {
  
  async componentDidMount() {
    await Font.loadAsync({
      'FontName': require('../../assets/fonts/icomoon.ttf')
    });

  }
  render() {

    return (
      <CustomIcon name="icon-name" size={32} color="red" />
    );
  }
}
