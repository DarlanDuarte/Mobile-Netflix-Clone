import React from 'react';
import {ImageBackground, Image, StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Hero({filme}) {
  return (
    <ImageBackground style={styles.capa} source={{uri: filme.capa}}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{uri: filme.logoMobile ? filme.logoMobile : filme.logo}}
      />
      <View style={styles.containerTop10}>
        <Image
          style={styles.top10Badge}
          resizeMode="contain"
          source={require('../../assets/badge-top-10.png')}
        />
        <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  capa: {
    width: '100%',
    height: 600,
  },
  logo: {
    marginTop: 380,
    alignSelf: 'center',
    width: 300,
    height: 150,
    position: 'absolute',
    zIndex: 10,
  },
  containerTop10: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top10Badge: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  top10Text: {
    color: '#fff',
    fontSize: 15,
  },
  gradient: {
    width: '100%',
    height: 200,
    position: 'absolute',
    bottom: 0,
    zIndex: 9,
  },
});
