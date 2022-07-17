import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text>Hello World</Text>
      </View>
      <View style={styles.bottom_view_container}>
        <Text>Hello World Two</Text>
      </View>
    </SafeAreaView>
  );
};
// style sheet özel bir moduldür

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper_view_container: {
    flex:1,
    backgroundColor: 'red',
  },
  bottom_view_container: {
    flex:1,
    backgroundColor: 'blue',
  },
});

export default App;
