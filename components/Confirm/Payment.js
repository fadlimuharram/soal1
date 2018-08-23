import React, { Component } from 'react';
import { Content, Card, CardItem, Text, Body, Button, Icon } from "native-base";
import { View, StyleSheet } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class AssetExample extends Component {
  

  render(){
    const radio_props = [
      {label: 'param1', value: 0 },
      {label: 'param2', value: 1 }
    ];
    return (
      <Card> 
        <CardItem bordered>
          <View style={styles.price}>
            <View style={styles.price__left}>
              <Text>Price</Text>
              <Text>Door to door (driver) </Text>
            </View>
            <View style={styles.price__right}>
              <Text>IDR 200.000</Text>
              <Text>IDR 50.000</Text>
            </View>
          </View>
        </CardItem>
        <CardItem bordered>
          <View style={styles.totalPayment}>
            <View style={styles.totalPayment__left}>
              <Text style={styles.totalPayment__left__text}>Total payment</Text>
            </View>
            <View style={styles.totalPayment__right}>
              <Text style={styles.totalPayment__right__text}>IDR 250.000</Text>
            </View>
          </View>
        </CardItem>
        <CardItem bordered>
          <View style={styles.responsiblePayment}>
            <View style={styles.responsiblePayment__up}>
              <Text>Responsible for Payment</Text>
            </View>
            <View style={styles.responsiblePayment__down}>
              <RadioGroup
                onSelect = {(index, value) => this.onSelect(index, value)}
                style={styles.responsiblePayment__down__radio}
                color='#391E85'
                selectedIndex={0}
              >
                <RadioButton value={'item1'}>
                  <Text>Sender</Text> 
                </RadioButton>
        
                <RadioButton value={'item2'}>
                  <Text>Receiver</Text>
                </RadioButton>
        
              </RadioGroup>
            </View>
          </View>
        </CardItem>
        <CardItem bordered>
          <View style={styles.payWith}>
            <View style={styles.payWith__up}>
              <Text>Pay With </Text>
            </View>
            <View style={styles.payWith__down}>
                <Button style={styles.payWith__down__btn} bordered>
                  <Icon name='ios-cash' style={styles.payWith__down__btn__icon} />
                  <Text style={styles.payWith__down__btn__text}>Cash</Text>
                </Button>
                <Button style={styles.payWith__down__btn} bordered>
                  <Icon name='account-balance-wallet' type="MaterialIcons" style={styles.payWith__down__btn__icon} />
                  <Text style={styles.payWith__down__btn__text}>Wallet</Text>
                </Button>
                <Button style={styles.payWith__down__btn}>
                  <Icon name='credit-card' type="EvilIcons" style={styles.payWith__down__btn__icon} />
                  <Text style={styles.payWith__down__btn__text}>Billed</Text>
                </Button>
            </View>
            <View style={styles.orderBtn}>
              <Button style={styles.orderBtn__btn}>
                <Text style={styles.orderBtn__text}>Order</Text>
              </Button>
            </View>
          </View>
        </CardItem>
        
      </Card>
    );
  }
}



const styles = StyleSheet.create({
  price: {
    flexDirection:'row'
  },
  price__left: {
    flex:1
  },
  price__right: {
    lex:1, 
    alignItems: 'flex-end'
  },
  totalPayment: {
    flexDirection:'row'
  },
  totalPayment__left: {
    flex:0
  },
  totalPayment__left__text: {
    color:'#391E85',
    fontWeight:'bold'
  },
  totalPayment__right: {
    flex:1,
    alignItems: 'flex-end'
  },
  totalPayment__right__text: {
    color:'#391E85', 
    fontSize:20,
    fontWeight:'bold'
  },
  responsiblePayment: {
    flexDirection:'column'
  },
  responsiblePayment__up: {
    flex:1
  },
  responsiblePayment__down: {
    flex:1, 
    marginLeft:-10, 
    marginTop:5
  },
  responsiblePayment__down__radio: {
    flexDirection:'row'
  },
  payWith: {
    flexDirection:'column'
  },
  payWith__up: {
    flex:1
  },
  payWith__down: {
    flex:1, 
    flexDirection:'row'
  },
  payWith__down__btn: {
    flexDirection:'column', 
    margin:10, 
    height:70, 
    width:90, 
    borderColor:'#391E85'
  },
  payWith__down__btn__icon: {
    flex:1,
    color:'#391E85'
  },
  payWith__down__btn__text: {
    flex:1,
    color:'#391E85'
  },
  orderBtn: {
    flex:1, 
    marginTop:20
  },
  orderBtn__btn:{
    backgroundColor:'#391E85'
  },
  orderBtn__text:{
    flex:1,
    color:'white', 
    textAlign:'center'
  }
});