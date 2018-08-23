import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import { View, StyleSheet } from 'react-native';

export default () => (
    <View style={styles.view}>
      <Item>
        <Icon active name='ios-contact' style={styles.view__icon} />
        <Input style={styles.view__input} placeholder='Name'/>
      </Item>
      <Item>
        <Icon name='phone' type="FontAwesome" style={styles.view__contact}/>
        <Input style={styles.view__input} placeholder='Phone number'/>
      </Item>
      <Item>
        <Input style={styles.view__input} placeholder="Notes, instruction, or location details" />
      </Item>
    </View>
);

const styles = StyleSheet.create({
  view: {
    flex:1, 
    marginTop:20,
    marginLeft: 40, 
    width:'85%'
  },
  view__icon:{
    color:'#391E85'
  },
  view__contact:{
    color:'#391E85'
  },
  view__input:{
    fontSize:15
  }
});
