import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'shauan', key: '1' },
    { name: 'yoshui', key: '2' },
    { name: 'mikini', key: '3' },
    { name: 'tikin', key: '4' },
    { name: 'tadajh', key: '5' },
    { name: 'jamak', key: '6' },
    { name: 'tadajh', key: '7' },
    { name: 'jamak', key: '8' },
  ])




  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item =>
        (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 25,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
