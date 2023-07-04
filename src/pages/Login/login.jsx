import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
  });

  // 0 => Carregando; 1 => Logado e 2 => deslogado
  const [logget, setLogget] = useState(0);

  async function checkLogin() {
    AsyncStorage.clear();
    const user = await AsyncStorage.getItem('@user');

    if (!user) {
      setLogget(2);
      return;
    }

    navigation.replace('Home');
    setLogget(1);
  }

  const login = async () => {
    try {
      const response = await api.post('/usuario/login', credenciais);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      await AsyncStorage.setItem('@user', JSON.stringify(res.usuario));
      navigation.replace('Home');
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    checkLogin();
  });

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      {logget === 0 && <ActivityIndicator color={'#fff'} size={'large'} />}

      {logget === 2 && (
        <View>
          <TextInput
            mode="flat"
            label={'Email ou número de telefone'}
            value={credenciais.email}
            onChangeText={text => setCredenciais({...credenciais, email: text})}
            style={styles.MarginInput}
          />
          <TextInput
            mode="flat"
            label={'Senha'}
            secureTextEntry
            value={credenciais.senha}
            onChangeText={text => setCredenciais({...credenciais, senha: text})}
            style={styles.MarginInput}
          />

          <Button
            mode="contained"
            onPress={() => login()}
            style={styles.MarginInput}>
            Press me
          </Button>
          <Button
            mode="text"
            onPress={() => console.log('Pressed')}
            style={styles.MarginInput}
            theme={{colors: {primary: '#fff'}}}>
            Recuperar Senha
          </Button>
          <Text style={styles.textSmall}>
            O acesso está protegido pelo Google reCAPTCHA para garantir que voce
            não é um robo. Saiba mais.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 100,
  },
  MarginInput: {
    marginBottom: 20,
  },
  textSmall: {
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
  },
});
