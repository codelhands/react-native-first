import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Yakup Sarı" text="haaa" />
      <Card title="Elif Sarı" text="Yakubumu çok seviyorum" />
    </SafeAreaView>
  );
};
// style sheet özel bir moduldür

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
