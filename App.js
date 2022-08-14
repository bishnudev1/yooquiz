import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Quiz' component={Quiz} />
        <Stack.Screen name='Result' component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App

