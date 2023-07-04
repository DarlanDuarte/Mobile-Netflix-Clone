import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';

import {Button, Title} from 'react-native-paper';
import ButtonVertical from '../../components/ButtonVertical/ButtonVertical';
import Previas from '../../components/Previas/Previas';
import Secao from '../../components/Secao/Secao';
import api from '../../services/api';

export default function Home() {
  const [secoes, setSecoes] = useState([]);
  const [principal, setPrincipal] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  async function getHome() {
    try {
      setRefreshing(true);
      const response = await api.get('/home');
      const res = response.data;

      if (res.error) {
        alert(res.message);
        setRefreshing(false);
        return false;
      }

      setSecoes(res.secoes);
      setPrincipal(res.principal);
      setRefreshing(false);
    } catch (e) {
      alert(e.message);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    getHome();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getHome} />
      }>
      <Header />
      <Hero filme={principal} />
      <View style={styles.menuHeader}>
        <ButtonVertical name={'plus'} text={'Minha Lista'} />
        <Button
          icon={'play'}
          mode="contained"
          buttonColor="#fff"
          textColor="#000"
          uppercase={false}>
          Assistir
        </Button>
        <ButtonVertical name={'information-outline'} text={'Saiba mais'} />
      </View>
      <View style={styles.previaContainer}>
        <Title style={styles.title}>Prévias</Title>
        <Previas filmes={secoes[0]} />
      </View>
      {secoes.map((secao, index) => (
        <Secao secao={secao} hasTopBorder key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  textWhite: {
    color: '#ffffff',
  },
  menuHeader: {
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  previaContainer: {
    width: '100%',
    marginTop: 50,
  },

  title: {
    color: '#fff',
    marginTop: 10,
    marginLeft: 32,
  },
});
