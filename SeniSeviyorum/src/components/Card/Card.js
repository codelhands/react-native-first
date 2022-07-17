import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import deneme from './Card.style'; //STYLE DOSYASINI importladık

const Card = props => {
  return (
    <View style={deneme.container}>
      <View style={deneme.body}>
        <Text style={deneme.title}>{props.title}</Text>
        <Text style={deneme.text}>{props.text}</Text>
      </View>
      <TouchableOpacity style={deneme.button_container}>
        <Text style={deneme.button_title}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
