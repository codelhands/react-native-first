import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};
// style sheet özel bir moduldür

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default App;
