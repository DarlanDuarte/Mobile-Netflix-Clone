import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {StatusBar} from 'react-native';

import Routes from './routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E50914',
    background: '#3c3c3c',
    placeholder: '#ffffff',
    text: '#fff',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={'#000'} />
      <Routes />
    </PaperProvider>
  );
}
