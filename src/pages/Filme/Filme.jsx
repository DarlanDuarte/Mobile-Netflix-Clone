import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Button, Caption, Paragraph, Title} from 'react-native-paper';
import ButtonVertical from '../../components/ButtonVertical/ButtonVertical';
import Secao from '../../components/Secao/Secao';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Episodio from '../../components/Episodio/Episodio';
import {SinglePickerMaterialDialog} from 'react-native-material-dialog';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';

export default function Filme({route}) {
  const {filme, secao} = route.params;
  const navigation = useNavigation();

  //const [tipo, setTipo] = useState('serie');
  const [visible, setVisible] = useState(false);
  const [temporada, setTemporada] = useState({
    value: filme?.temporadas[0]?._id,
    label: filme?.temporadas[0]?.titulo,
  });
  const [episodio, setEpisodio] = useState([]);

  async function getEpisodeos(temporada_id) {
    try {
      const response = await api.get(`/episodio/temporada/${temporada_id}`);
      const res = await response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      setEpisodio(res.episodios);
    } catch (e) {
      alert(e.message);
    }
  }

  useEffect(() => {
    if (
      filme.tipo === 'serie' &&
      filme.temporadas &&
      filme.temporadas.length > 0
    ) {
      getEpisodeos(temporada.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SinglePickerMaterialDialog
        title={`${filme.titulo} - Temporadas`}
        items={filme?.temporadas.map(temporad => ({
          value: temporad._id,
          label: temporad.titulo,
        }))}
        visible={visible}
        selectedItem={temporada}
        onCancel={() => setVisible(false)}
        onOk={result => {
          getEpisodeos(result.selectedItem.value);
          setVisible(false);
          setTemporada(result.selectedItem);
        }}
      />
      <ScrollView style={styles.container}>
        <ImageBackground source={{uri: filme.capa}} style={styles.hero}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.buttonBack}>
            <Icon name="arrow-left" color={'#fff'} size={25} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.containerPadding}>
          <Title style={styles.title}>{filme.titulo}</Title>
          <Button
            style={{marginVertical: 20}}
            icon={'play'}
            mode="contained"
            buttonColor="#fff"
            textColor="#000"
            uppercase={false}>
            Assitir
          </Button>
          <Paragraph style={styles.paragrafo}>{filme.descricao}</Paragraph>
          <Caption style={styles.captionInfos}>
            Elenco:
            <Caption style={styles.captionWhite}>
              {filme.elenco?.join(', ')}
            </Caption>{' '}
            Gêneros:{' '}
            <Caption style={styles.captionWhite}>
              {filme.generos?.join(', ')}
            </Caption>
            Cenas e momentos{' '}
            <Caption style={styles.captionWhite}>
              {filme.cenas_momentos?.join(', ')}
            </Caption>
          </Caption>
          <View style={styles.menu}>
            <ButtonVertical name={'plus'} text={'Minha Lista'} />
            <ButtonVertical name={'thumb-up'} text={'Classifique'} />
            <ButtonVertical name={'send'} text={'Compartilhe'} />
            <ButtonVertical name={'download'} text={'Baixar'} />
          </View>
        </View>

        {filme.tipo === 'filme' && <Secao secao={secao} hasTopBorder />}
        {filme.tipo === 'serie' && (
          <>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles.buttonTemporada}>
              <Text style={styles.temporadaName}> {temporada.label} </Text>
              <Icon name="chevron-down" color={'#fff'} size={20} />
            </TouchableOpacity>
            {episodio.map((episodeo, index) => (
              <Episodio episodeo={episodeo} key={index} />
            ))}
          </>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#000',
  },
  hero: {
    width: '100%',
    height: 400,
  },
  containerPadding: {padding: 20},
  title: {color: '#fff'},
  paragrafo: {
    color: '#fff',
    textAlign: 'left',
  },
  captionInfos: {
    color: '#7c7979',
    marginTop: 20,
  },
  captionWhite: {
    color: '#fff',
  },
  menu: {
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonTemporada: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: ' rgba(255,255,255,0.21)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  temporadaName: {color: '#fff'},
  buttonBack: {
    padding: 20,
  },
});
