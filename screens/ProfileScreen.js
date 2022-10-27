import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, Dimensions, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView from 'react-native-maps';

const ProfileScreen = ({navigation, route}) => {

  const [GameNameValue, GameName] = React.useState(null);
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

        <View style={[styles.container]}>
          

          <Text style={[styles.label]}>'@User'</Text>
          <Image source={require('../assets/userplaceholder.png')}/>




  
          
          <View style={styles.buttonView}>
            <Button 
              style={styles.buttonView}
              title="Update"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>


        </View>
    </SafeAreaView>
  );
};

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "vertical",
      height: "100%",
      alignItems: 'center',

    },

    map: {
      width: Dimensions.get('window').width,
      height: "45%",
      padding: 10,
      margin: 0
    },

    input: {
      width: '90%',
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10
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