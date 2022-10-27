import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, Dimensions,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView from 'react-native-maps';

const CreateGameScreen = ({navigation, route}) => {

  const [GameNameValue, GameName] = React.useState(null);
  const [GameLocationValue, GameLocation] = React.useState(null);
  const [DescriptionValue, Description] = React.useState(null);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(true);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style = {tw`bg-white h-full`}>

        <ScrollView style={[styles.container]}>
          <View style={[styles.container]}>

            <Text style={[styles.label]}>Game Name</Text>

            <TextInput
              style={styles.input}
              onChangeText={GameName}
              value={GameNameValue}
              placeholder="'@User' + 's Game"
              placeholderTextColor='gray'
              keyboardType="default"
            />
            <MapView initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              }} style={styles.map} 
            />

            <Text style={[styles.label]}>Game Location</Text>

            <TextInput
              style={styles.input}
              onChangeText={GameLocation}
              value={GameLocationValue}
              placeholder="High School"
              placeholderTextColor='gray'
              keyboardType="default"
            />

            <Text style={styles.label}>Description (Optional)</Text>

            <TextInput
              style={[styles.input]}
              onChangeText={Description}
              value={DescriptionValue}
              placeholder="Casual, cleats, bring your own ball, etc."
              placeholderTextColor='gray'
              keyboardType="default"
            />

            <View style={{padding: 10, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Select Date</Text>
              <View style={{padding: 10,
                      width: 100}}>
                <DateTimePicker
                  style={{alignItems: 'center',
                    justifyContent: 'center'}}
                  testID="dateTimePicker"
                  value={date}
                  mode='date'
                  is24Hour={true}
                  onChange={onChange}
                />
              </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text>Select Time</Text>
              
              <View style={{padding: 10,
                      width: 100}}>
                <DateTimePicker
                  style={{}}
                  testID="dateTimePicker"
                  value={date}
                  mode='time'
                  is24Hour={true}
                  onChange={onChange}
                />
              </View>
            </View>
    
            
            <View style={styles.buttonView}>
              <Button 
                style={styles.buttonView}
                title="Create"
                onPress={() => navigation.navigate('My Games')} 
              />
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default CreateGameScreen

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      alignItems: 'center',

    },

    map: {
      width: Dimensions.get('window').width,
      height: "50%",
      padding: 10,
      margin: 10
    },

    input: {
      width: '90%',
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },

    label: {
      padding: 10
    },

    buttonView: {
      width: '50%',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });