import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

const App = () => {
  return (
    //stringlerde süslü paranteze gerek yok
    // control space ile component
    // hiyerarşi yapısı viewin çocuğu text'tir.
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
      </View>
      <Text>Hello World 2</Text>
      <Button
        title="Press Me!"
        onPress={() => {
          null;
        }}
      />
    </SafeAreaView>
  );
};

export default App;
