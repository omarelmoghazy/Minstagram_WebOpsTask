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




const LoginStack = createStackNavigator()
const AppTab = createBottomTabNavigator()

function Home() {
  return (
    <AppTab.Navigator>
      <AppTab.Screen name="Newsfeed" component={NewsfeedScreen} options={{ title: 'Newsfeed' }} />
      <AppTab.Screen name="Bucketlist" component={BucketListScreen} options={{ title: 'Bucketlist' }} />
      <AppTab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </AppTab.Navigator>
  )
}
const ActivityStack = createStackNavigator()

export default function App() {

  // const [userToken, setUserToken] = useState(null)

  const userToken = store.getState().auth.currentUser

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);

  // React.useMemo(() => {
  //   setUserToken(store.getState().auth.currentUser)
  // }, [store.getState().auth.currentUser])

  // React.useMemo(() => {

  // }, [])



  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        {userToken ? (
          <AppTab.Navigator>
            <AppTab.Screen name="Newsfeed" component={NewsfeedScreen} options={{ title: 'Newsfeed' }} />
            <AppTab.Screen name="Bucketlist" component={BucketListScreen} options={{ title: 'Bucketlist' }} />
            <AppTab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
          </AppTab.Navigator>
        ) : (
            <LoginStack.Navigator>
              <LoginStack.Screen name="Register" component={RegisterScreen} options={{ title: 'Minstagram' }} />
              <LoginStack.Screen name="Login" component={LoginScreen} options={{ title: 'Minstagram', headerLeft: () => false }} />
              <LoginStack.Screen name="Home" component={Home} options={{ headerShown: false}} />
            </LoginStack.Navigator>
          )}
      </NavigationContainer>
    </Provider>
  )
}
