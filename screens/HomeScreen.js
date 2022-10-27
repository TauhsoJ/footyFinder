import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import tw from 'twrnc';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  VirtualizedList,
  ScrollView,
  Modal,
  Pressable,
  Alert
} from "react-native";
import { MaterialHeaderButtons } from '../components/HeaderButtons';
import { Item } from 'react-navigation-header-buttons';


const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Game ${index+1}`
});

const getItemCount = (data) => 5;

const Games = ({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
    <Text>Date and Time</Text>
    <Text>Location</Text>
    <Text>Description</Text>
  </View>
);

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButtons>
          <Item title="add" iconName="person-outline" 
          onPress={() => navigation.navigate('Profile')} 
          />
        </MaterialHeaderButtons>
      ),
    });
  }, [navigation]);
  const [modalVisible, setModalVisible] = useState(false);
  const [GameNameValue, GameName] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>    
      <ScrollView>
        <VirtualizedList
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Games title={item.title} />}
          keyExtractor={item => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </ScrollView>
      <View style={{flexDirection: 'row',
                  justifyContent:'space-around'}}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.modalText}
                onChangeText={GameName}
                value={GameNameValue}
                placeholder="'@User' + 's Game"
                placeholderTextColor='gray'
                keyboardType="default"
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Search</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Search Games</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate('My Games')
          } 
          style={styles.loginBtn}>
          <Text style={styles.loginText}>My Games</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate('Create Game')
          } 
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Create Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#c9e0e9',
    height: 150,
    justifyContent: 'space-around',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width:'80%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    textAlign: "center",
    justifyContent: "center",
  },
  modalText: {
    marginBottom: 15,
    width:'100%',
    height: 40,
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  textStyle: {
    textAlign: "center"
  },
  loginBtn: {
    width: "30%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#3d85c6",
  },
});
