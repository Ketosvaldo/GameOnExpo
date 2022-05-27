import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import CategoriesScreen from './CategoriesScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Root(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{headerShown:false, title: "Home"}}/>
      <Tab.Screen name="CategoriesTab" component={CategoriesScreen} options={{headerShown:false, title: "Categories"}}/>
      <Tab.Screen name="GameTab" component={GameScreen} options={{headerShown:false, title: "Game"}}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Root'>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Categories" component={CategoriesScreen}/>
        <Drawer.Screen name="Game" component={GameScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="Root" component={Root} options={{headerTitle: "Home"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}