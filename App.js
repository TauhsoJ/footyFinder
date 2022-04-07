import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { Provider } from "react-redux";
import CreateGameScreen from './screens/createGameScreen';
import { store } from './store';



export default function App() {
  return (
    <Provider store={store}>
      <CreateGameScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    
  },
});
