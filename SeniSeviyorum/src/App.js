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
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddar Stark</Text>
          <Text style={styles.card_text}>Winter is coming...</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Elif Sarı Emre</Text>
          <Text style={styles.card_text}>Ben bunun altından kalkamam</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Yakup Sarı</Text>
          <Text style={styles.card_text}>
            Kim diyo uyuşturucu kullanıyorum diye
          </Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
      </View>

      <Card />
    </SafeAreaView>
  );
};
// style sheet özel bir moduldür

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  card_container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 0.1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  card_body: {
    padding: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  card_text: {
    fontSize: 10,
    margin: 10,
    marginTop: 3,
  },
  card_button_container: {
    backgroundColor: 'aqua',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_button_title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
