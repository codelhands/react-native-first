import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import deneme from './Card.style'; //STYLE DOSYASINI importladık

const Card = () => {
  return (
    <View style={deneme.container}>
      <View style={deneme.body}>
        <Text style={deneme.title}>John Doe</Text>
        <Text style={deneme.text}>Lorem Ipsum...</Text>
      </View>
      <TouchableOpacity style={deneme.button_container}>
        <Text style={deneme.button_title}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
