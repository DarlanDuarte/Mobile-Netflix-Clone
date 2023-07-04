import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ButtonVertical({name, text}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name={name} size={20} color="#fff" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {justifyContent: 'center', alignItems: 'center'},
  text: {
    color: '#fff',
  },
});
