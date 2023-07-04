import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function Secao({hasTopBorder, secao}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {hasTopBorder && <View style={styles.topBorder} />}
      <Title style={styles.secaoText}>{secao[0]?.generos[0]}</Title>
      <FlatList
        style={styles.lista}
        horizontal
        data={secao}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Filme', {filme: item, secao: secao})
            }
            key={index}>
            <ImageBackground
              style={[
                styles.capa,
                {marginRight: 10, marginLeft: index === 0 ? 20 : 0},
              ]}
              source={{uri: item.capa}}
            />
            <Image
              style={styles.logo}
              source={{uri: item.logoMobile ? item.logoMobile : item.logo}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: '100%'},
  secaoText: {color: '#fff'},
  lista: {
    width: '100%',
    height: 180,
    marginTop: 10,
    marginBottom: 30,
  },
  capa: {width: 150, height: 180, borderRadius: 5, overflow: 'hidden'},
  logo: {
    position: 'absolute',
    zIndex: 10,
    width: 110,
    height: 50,
    bottom: 20,
    alignSelf: 'center',
  },
  topBorder: {
    width: 100,
    height: 3,
    backgroundColor: '#E50914',
    left: 20,
    marginBottom: 10,
  },
});
