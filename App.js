import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <StatusBar style="auto" />
      <View style = {{alignItems: "center",
          flex: 2,
        }}>
        <Text style = {{
          color: 'black'
          }}>footyFinder</Text>
      </View>

      <View style = {{
          flex: 5,
          alignItems: "center",
          
        }}>
        <Text>Map / Calendar placeholder</Text>
      </View>

      <TextInput style={{
        flex: 1,
        textAlign: "center",
        borderWidth: 1,
        
      }}
      placeholder="Game Name"
      />

      <TextInput style={{
        flex: 1,
        textAlign: "center",
        borderWidth: 1,
        
      }}
      placeholder="Start typing a location"
      />

      <View style={{

        }}>
        <Text>Number of Players</Text>
      </View>

      <View style={{

        }}>
        <Text>Skill Level</Text>
      </View>
      <Button
        title="Create Game"
        //onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    
  },
});
