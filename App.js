import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { navigationRef, isReadyRef } from './navigationRef'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux'
import store from './src/redux/store'

import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import NewsfeedScreen from './src/screens/NewsfeedScreen'
import AddPostScreen from './src/screens/AddPostScreen'
import BucketListScreen from './src/screens/BucketListScreen'
import ProfileScreen from './src/screens/ProfileScreen'


import { LogBox } from 'react-native';



const LoginStack = createStackNavigator()
const AppTab = createBottomTabNavigator()

const ActivityStack = createStackNavigator()

function Activity() {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen name="Newsfeed" component={NewsfeedScreen} options={{ title: 'Newsfeed',  headerShown: false}} />
      <ActivityStack.Screen name="AddPost" component={AddPostScreen} options={{ title: 'Add a post'}} />
    </ActivityStack.Navigator>
  )
}

function Home() {
  return (
    <AppTab.Navigator>
      <AppTab.Screen name="Activity" component={Activity} options={{ title: 'Newsfeed', headerShown: false }} />
      <AppTab.Screen name="Bucketlist" component={BucketListScreen} options={{ title: 'Bucketlist' }} />
      <AppTab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </AppTab.Navigator>
  )
}


export default function App() {

  const userToken = store.getState().auth.currentUser

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);


  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        {userToken ? (
          <AppTab.Navigator>
            <AppTab.Screen name="Activity" component={Activity} options={{ title: 'Newsfeed', headerShown: false }} />
            <AppTab.Screen name="Bucketlist" component={BucketListScreen} options={{ title: 'Bucketlist' }} />
            <AppTab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
          </AppTab.Navigator>
        ) : (
            <LoginStack.Navigator>
              <LoginStack.Screen name="Register" component={RegisterScreen} options={{ title: 'Minstagram' }} />
              <LoginStack.Screen name="Login" component={LoginScreen} options={{ title: 'Minstagram', headerLeft: () => false }} />
              <LoginStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </LoginStack.Navigator>
          )}
      </NavigationContainer>
    </Provider>
  )
}
