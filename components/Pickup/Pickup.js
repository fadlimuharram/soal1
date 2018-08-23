import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Item, Input, Icon } from 'native-base';
import { Ionicons, Entypo, Foundation, EvilIcons } from '@expo/vector-icons';

export default class Pickup extends Component{

  static navigationOptions = {
    title: 'Pick Up Location',
  }; 

  render(){
    return (
      <Container style={{marginTop:-5}}> 
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Item regular>
                  <Icon active name='md-pin' style={{color:'#391E85'}} />
                  <Input placeholder='Pick Up Location'/>
                </Item>
              </Body>
            </CardItem> 
          </Card>
          <Card style={{
            marginLeft:10, 
            marginRight:10}}>
            <CardItem>
              <Body style={{flexDirection:'row'}}>
                <View style={{flex:0}}>
                  <Icon active name='md-locate' type="Ionicons" style={{color:'#391E85'}} />
                </View>
                <View style={{flex:1}}>
                  <Text style={{fontSize:15,justifyContent:'center',lineHeight:30,marginLeft:10}}> Set route from favorite list</Text>
                </View> 
              </Body>
            </CardItem>
          </Card>
          <Card style={{
            marginLeft:10, 
            marginRight:10}}>
            <CardItem>
              <Body style={{flexDirection:'row'}}>
                <View style={{flex:0}}>
                  <Icon active name='location' type="Entypo" style={{color:'#391E85'}} />
                </View>
                <View style={{flex:1}}>
                  <Text style={{fontSize:15,justifyContent:'center',lineHeight:30,marginLeft:10}}> Set location on the map</Text>
                </View> 
              </Body>
            </CardItem>
          </Card>
          <Card style={{
            marginLeft:10, 
            marginRight:10}}>
            <CardItem>
              <Body style={{flexDirection:'row'}}>
                <View style={{flex:5}}>
                  <Text style={{fontSize:15}}>Home</Text>
                  <Text style={{fontSize:12,color:'gray'}}>Queen Street V no. 18d</Text>
                </View>
                <View style={{flex:1,alignItems: 'flex-end'}}>
                  <Icon type="Entypo" name="star" style={{color:'#FFEA01'}}/>
                </View> 
              </Body>
            </CardItem>
          </Card>
          <Card style={{
            marginLeft:10, 
            marginRight:10}}>
            <CardItem>
              <Body style={{flexDirection:'row'}}>
                <View style={{flex:5}}>
                  <Text style={{fontSize:15}}>Work</Text>
                  <Text style={{fontSize:12,color:'gray'}}>King Street VI no. 19</Text>
                </View>
                <View style={{flex:1,alignItems: 'flex-end'}}>
                  <Icon type="Entypo" name="star" style={{color:'#FFEA01'}}/>
                </View>  
              </Body>
            </CardItem>
          </Card>
          <Card style={{
            marginLeft:10, 
            marginRight:10}}>
            <CardItem>
              <Body style={{flexDirection:'row'}}>
                <View style={{flex:5}}>
                  <Text style={{fontSize:15}}>Daily Market</Text>
                  <Text style={{fontSize:12,color:'gray'}}>Queen Street V no. 18d</Text>
                </View>
                <View style={{flex:1,alignItems: 'flex-end'}}>
                  <Icon type="EvilIcons" name="star" style={{color:'grey'}}/>
                </View>  
              </Body>
            </CardItem>
          </Card>
          <Card style={{
            marginLeft:10, 
            marginRight:10}}>
            <CardItem>
              <Body style={{flexDirection:'row'}}>
                <View style={{flex:5}}>
                  <Text style={{fontSize:15}}>Hospital</Text>
                  <Text style={{fontSize:12,color:'gray'}}>Queen Street V no. 18d</Text>
                </View>
                <View style={{flex:1,alignItems: 'flex-end'}}>
                  <Icon type="EvilIcons" name="star" style={{color:'grey'}}/>
                </View>  
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}