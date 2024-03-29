import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import TweetScreen from './screens/TweetScreen';
import ProfileScreen from './screens/ProfileScreen';
import PigPenCipherScreen from './screens/PigPenCipherScreen';
import CeaserCipherScreen from './screens/CeaserCipherScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ChallengeScreen from './screens/ChallengeScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, headerBackTitleVisible: false }}
    >
      <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown:false }} />
      <Stack.Screen name="New Tweet" component={NewTweet} options={{ title:'' }}/>
      <Stack.Screen name="Tweet Screen" component={TweetScreen} options={{ title:'' }}/>
      <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{ title:'' }}/>
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='="Home'
        screenOptions={{ headerShown: true }}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Ceaser Cipher" component={CeaserCipherScreen} />
        <Drawer.Screen name="PigPen Cipher" component={PigPenCipherScreen} />
        <Drawer.Screen name="Challenges" component={ChallengeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
