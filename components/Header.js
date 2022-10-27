import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CreateGameScreen from '../screens/CreateGameScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

export default function Header({ title, navigation }) {

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >

      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Create Game" component={CreateGameScreen} />
    </Drawer.Navigator>
  );
}

return (
      <MyDrawer/>
  );

}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  }
}); 