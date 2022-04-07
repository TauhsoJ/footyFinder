import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';

const CreateGameScreen = () => {
  return (
    <SafeAreaView style = {tw`bg-white h-full`}>
        <View>
            <Text style = {tw`
                    text-black-500 
                    text-center
                `}>
                        footyFinder
            </Text>
        </View>

        <View>
            <Text style = {tw`text-black-500`}>
                    Map / Calendar placeholder
            </Text>
        </View>
    </SafeAreaView>
  );
};

export default CreateGameScreen

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      
    },
  });