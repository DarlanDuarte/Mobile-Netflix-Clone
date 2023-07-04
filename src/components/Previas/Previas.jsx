import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Previas({filmes}) {
  return (
    <FlatList
      horizontal
      style={styles.flatListContainer}
      data={filmes}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={{marginLeft: index === 0 ? 20 : 0, marginRight: 10}}
          key={index}>
          <View style={styles.oval}>
            <Image style={styles.capa} source={{uri: item.capa}} />

            <Image
              resizeMode="contain"
              style={styles.logo}
              source={{uri: item.logoMobile ? item.logoMobile : item.logo}}
            />
            <LinearGradient
              style={styles.gradient}
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    height: 150,
    marginTop: 10,
    marginBottom: 50,
  },
  oval: {
    backgroundColor: '#E50914',
    padding: 2.5,
    width: 140,
    height: 140,
    borderRadius: 90,
  },
  capa: {
    height: 135,
    width: 135,
    borderRadius: 90,
  },
  logo: {
    position: 'absolute',
    width: 110,
    height: 90,
    bottom: 5,
    alignSelf: 'center',
    zIndex: 10,
  },
  gradient: {
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
    width: '100%',
    height: 90,
  },
});
