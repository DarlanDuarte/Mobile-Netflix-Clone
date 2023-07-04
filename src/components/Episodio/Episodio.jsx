import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Caption, Title} from 'react-native-paper';

export default function Episodio({episodeo}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <View>
          <Image style={styles.capa} source={{uri: episodeo.capa}} />
        </View>
        <View>
          <Title style={{fontSize: 15, color: '#fff'}}>
            {episodeo.numero}. {episodeo.titulo}
          </Title>
          <Caption style={{color: '#fff'}}>45 min</Caption>
        </View>
      </View>
      <Caption style={{color: '#c0c0c0'}}>
        O tenente James Gordon chega a Gotham com o intuito de combater a
        corrupção.
      </Caption>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  capa: {
    width: 130,
    height: 70,
    marginRight: 10,
  },
});
