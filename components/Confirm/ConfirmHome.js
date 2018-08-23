import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Button, Item, Input, Icon } from 'native-base';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons, Entypo, Foundation, EvilIcons } from '@expo/vector-icons';
import FormInsert from './FormInsert';
import Payment from './Payment';
import ContactAndNote from './ContactAndNote';

export default class ConfirmHome extends Component {
  static navigationOptions = {
      title: 'Confirm Order',
  };


  render() {
    return (
      <Container style={styles.container}>
    
        <Content>
          <Card style={styles.container__card}>
            <CardItem>
              <Body style={styles.container__card__body}>
                <Text style={styles.container__card__body__text}>
                   Your Package Photo
                </Text>

                <TouchableOpacity 
                  style={styles.container__card__body__touch}
                  >
                  <Text style={styles.container__card__body__touch__text}
                  >+</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
          

          <ContactAndNote navigation={this.props.navigation} />
          <Payment />
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor:'#F1F2F6'
  },
  container__card: {
    marginLeft:10, 
    marginRight:10
  },
  container__card__body: {
    flex:1,
    flexDirection: 'row'
  },
  container__card__body__text: {
    flex:1, 
    fontSize:15
  },
  container__card__body__touch: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:25,
    height:25,
    backgroundColor:'#391E85',
    borderRadius:25,
    shadowColor: "black",
    shadowOffset: { height: 2},
    shadowOpacity: 0.3,
  },
  container__card__body__touch__text: {
    color:'white',
    fontSize:10
  }
}