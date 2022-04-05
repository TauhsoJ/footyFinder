import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView style = {styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style = {{
          color: 'black'
          }}>footyFinder</Text>
      </View>

      <View style = {{
          flex: 1,
          alignItems: "center",
          
        }}>
        <Text>Map / Calendar placeholder</Text>
      </View>

      <TextInput style={{
        flex: 1,
        alignItems: "center",
        
      }}
      defaultValue="Game Name"
      />

      <TextInput style={{
        flex: 1,
        alignItems: "center",
        
      }}
      defaultValue="Start typing a location"
      />

      <View style={{
          flex: 1,
          alignItems: "center",
          
        }}>
        <Text>Number of Players</Text>
      </View>

      <View style={{
          flex: 1,
          alignItems: "center",
          
        }}>
        <Text>Skill Level</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});
