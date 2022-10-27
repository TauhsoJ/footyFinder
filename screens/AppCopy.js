import { StatusBar } from 'expo-status-bar';
import React, {Component, useEffect, useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TextInput, 
  Button, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';
import { Provider } from "react-redux";
import CreateGameScreen from './screens/CreateGameScreen';
import HomeScreen from './screens/HomeScreen';
import MyGamesScreen from './screens/MyGamesScreen';
import { store } from './store';
import DateTimePicker from '@react-native-community/datetimepicker';
import tw from 'twrnc';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Header from './components/Header';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { MaterialHeaderButtons } from './components/HeaderButtons';
import { Item } from 'react-navigation-header-buttons';

const AuthContext = React.createContext();
const Drawer = createDrawerNavigator();
function SignOutScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    signOut
  );
}
function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function LoginScreen() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = React.useContext(AuthContext);
 
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>  
      <TouchableOpacity onPress={() => signIn({ email, password })}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>         
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App({ navigation }) {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        //userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <SafeAreaProvider>
            <Drawer.Navigator
              drawerPosition='right'>
              {state.isLoading ? (
          // We haven't finished checking for the token yet
                <Stack.Screen name="Splash" component={SplashScreen} />
              ) : state.userToken == null ? (
                <Stack.Screen 
                  name="footyFinder"
                  component={LoginScreen}
                  options={{
                    title: 'Sign in',
                    // When logging out, a pop animation feels intuitive
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                />
              ) : (
                <>
                  <Stack.Screen 
                    name="Home"
                    component={HomeScreen} 
                  />
                  <Stack.Screen 
                    name="My Games"
                    component={MyGamesScreen} 
                  />
                  <Stack.Screen 
                    name="Create Game"
                    component={CreateGameScreen}
                  />
                  <Stack.Screen 
                    name="Sign Out"
                    component={SignOutScreen} 
                  />
                </>
              )}
            </Drawer.Navigator>
          
        </SafeAreaProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  inputView: {
    backgroundColor: "#c9e0e9",
    borderRadius: 30,
    width: "60%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3d85c6",
  },
});
