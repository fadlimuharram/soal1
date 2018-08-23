import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Item,
  Input,
  Icon,
} from 'native-base';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons, Entypo, Foundation, EvilIcons, FontAwesome } from '@expo/vector-icons';
import FormInsert from './FormInsert';

export default class ContactAndNote extends Component {
  state = {
    isCheckedSender: false,
    isCheckedReceiverOne: false,
    isCheckedReceiverTwo: false,
  };

  ShowisCheckedReceiverTwoComponentView = () => {
    if (this.state.isCheckedReceiverTwo == true) {
      this.setState({ isCheckedReceiverTwo: false });
    } else {
      this.setState({ isCheckedReceiverTwo: true });
    }
  };

  ShowisCheckedReceiverOneComponentView = () => {
    if (this.state.isCheckedReceiverOne == true) {
      this.setState({ isCheckedReceiverOne: false });
    } else {
      this.setState({ isCheckedReceiverOne: true });
    }
  };

  ShowisCheckedSenderComponentView = () => {
    if (this.state.isCheckedSender == true) {
      this.setState({ isCheckedSender: false });
    } else {
      this.setState({ isCheckedSender: true });
    }
  };

  renderSender() {
    if (this.state.isCheckedSender) {
      return <FormInsert />;
    }
  }

  renderReceiverOne() {
    if (this.state.isCheckedReceiverOne) {
      return <FormInsert />;
    }
  }

  renderReceiverTwo() {
    if (this.state.isCheckedReceiverTwo) {
      return <FormInsert />;
    }
  }

  render() {
    return (
    <Card style={styles.card}>
      <CardItem>
        <Body style={styles.card__body}>
          <View style={styles.card__body__desc}>
            <Text style={styles.card__body__desc__text}>
              Enter contact number(sender and receiver) and note for the driver
            </Text>
          </View>
          <View style={styles.card__body__sender}>
            <View style={styles.card__body__sender__icon}>
              <Ionicons name="md-pin" size={32} color="#391E85" />
            </View>
            <View style={styles.card__body__sender__desc}>
              <Text style={styles.card__body__sender__desc__sender}>Sender</Text>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Pickup')}
              >
                <Text style={styles.card__body__sender__desc__alamat}>
                  Jl. Jendral Sudirman no 1 1
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card__body__sender__expand}>
              <TouchableOpacity
                style={styles.card__body__sender__expand__touch}
                onPress={this.ShowisCheckedSenderComponentView}>
                {this.state.isCheckedSender ? (
                  <Entypo
                    name="chevron-up"
                    style={styles.card__body__sender__expand__touch__updown}
                  />
                ) : (
                  <Entypo
                    name="chevron-down"
                    style={styles.card__body__sender__expand__touch__updown}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {this.renderSender()}

          <View
            style={styles.card__body__receiver}>
            <View style={styles.card__body__receiver__icon}>
              <FontAwesome name="map-pin" size={32} color="#EE8100" />
            </View>
            <View style={styles.card__body__receiver__desc}>
              <Text style={styles.card__body__receiver__desc__receiver}>Receiver 1</Text>
              <Text style={styles.card__body__receiver__desc__alamat}>
                Jl. Pamoyan no 14
              </Text>
            </View>
            <View
              style={styles.card__body__receiver__expand}>
              <TouchableOpacity
                style={styles.card__body__receiver__expand__touch}
                onPress={this.ShowisCheckedReceiverOneComponentView}>
                {this.state.isCheckedReceiverOne ? (
                  <Entypo
                    name="chevron-up"
                    style={styles.card__body__receiver__expand__touch__updown}
                  />
                ) : (
                  <Entypo
                    name="chevron-down"
                    style={styles.card__body__receiver__expand__touch__updown}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {this.renderReceiverOne()}

          <View
            style={styles.card__body__receiver}>
            <View style={styles.card__body__receiver__icon}>
              <FontAwesome name="map-pin" size={32} color="#EE8100" />
            </View>
            <View style={styles.card__body__receiver__desc}>
              <Text style={styles.card__body__receiver__desc__receiver}>Receiver 2</Text>
              <Text style={styles.card__body__receiver__desc__alamat}>
                Jl. A yani no 292
              </Text>
            </View>
            <View
              style={styles.card__body__receiver__expand}>
              <TouchableOpacity
                style={styles.card__body__receiver__expand__touch}
                onPress={this.ShowisCheckedReceiverTwoComponentView}>
                {this.state.isCheckedReceiverTwo ? (
                  <Entypo
                    name="chevron-up"
                    style={styles.card__body__receiver__expand__touch__updown}
                  />
                ) : (
                  <Entypo
                    name="chevron-down"
                    style={styles.card__body__receiver__expand__touch__updown}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {this.renderReceiverTwo()}
        </Body>
      </CardItem>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginLeft:10, 
    marginRight:10
  },
  card__body: { 
    flex: 1, flexDirection: 'column' 
  },
  card__body__desc:{ 
    flex: 1 
  },
  card__body__desc__text: {
    fontSize:15
  },
  card__body__sender: {
    flexDirection: 'row',
    marginTop: 10,
    flex: 1 
  },
  card__body__sender__icon:{
    flex: 1
  },
  card__body__sender__desc:{
    flex: 6
  },
  card__body__sender__desc__sender: { 
    fontSize: 20, 
    color: '#391E85' 
  },
  card__body__sender__desc__alamat: { 
    fontSize: 14, 
    color: 'gray' 
  },
  card__body__sender__expand: {
    flex: 1,
    flexDirection: 'row',
  },
  card__body__sender__expand__touch: { 
    marginLeft: 'auto' 
  },
  card__body__sender__expand__touch__updown: {
    fontSize: 25, 
    color: 'gray'
  },
  card__body__receiver: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  card__body__receiver__icon: { 
    flex: 1 
  },
  card__body__receiver__desc: {
    flex: 6
  },
  card__body__receiver__desc__receiver: {
    fontSize: 20, 
    color: '#EE8100'
  },
  card__body__receiver__desc__alamat: {
    fontSize: 14, 
    color: 'gray'
  },
  card__body__receiver__expand: {
    flex: 1,
    flexDirection: 'row',
  },
  card__body__receiver__expand__touch: {
    marginLeft:'auto'
  },
  card__body__receiver__expand__touch__updown:{
    fontSize: 25, 
    color: 'gray'
  }
});
