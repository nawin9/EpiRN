import React from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './src';

class EpiRN extends React.Component {
  render() {
    return (
      <App />
    );
  }
};

AppRegistry.registerComponent('epirn', () => EpiRN);
