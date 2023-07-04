import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Header() {
  return (
    <LinearGradient
      colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
      style={styles.header}>
      <View style={styles.headerSafeAreaView}>
        <Image source={require('../../assets/logo-compact.png')} />
        <TouchableOpacity>
          <Text style={styles.textWhite}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textWhite}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textWhite}>Minha Lista</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {position: 'absolute', zIndex: 999, top: 0},
  textWhite: {
    color: '#ffffff',
  },
  headerSafeAreaView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 70,
    alignItems: 'center',
  },
});
