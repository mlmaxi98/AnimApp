import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { ApolloProvider as Provider } from 'react-apollo'
import { NavigationContainer as Navigation, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Details, Home, Search } from './views'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Client from './graphql'
import { useColorScheme } from 'react-native';

const { Screen, Navigator } = createStackNavigator()

export default function App({ navigation }) {
  const scheme = useColorScheme();
  const [darkMode, setDarkMode] = useState(false)
  const theme = darkMode ? DarkTheme : DefaultTheme
  return (
    <Provider client={Client} >
      <Navigation theme={theme}>
        <Navigator
          sceneAnimationEnabled
          screenOptions={{
            headerShown: false
          }}
        >
          <Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icons name="home" color={color} size={26} />
              ),
              headerTitleAlign: 'center',

            }}
          />

          <Screen
            name="Details"
            component={Details}
            options={{
              tabBarLabel: 'Details',
              tabBarIcon: ({ color }) => (
                <Icons name="magnify" color={color} size={26} />
              ),
            }}
          />
          {/* 
          <Screen
            name="Favorites"
            component={Favorites}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({ color }) => (
                <Icons name="heart" color={color} size={26} />
              ),
            }}
          />
          <Screen
            name="Anime"
            component={Anime}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({ color }) => (
                <Icons name="heart" color={color} size={26} />
              ),
            }}
          />
          <Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <Icons name="cog" color={color} size={26} />
              ),
            }}
          /> */}
        </Navigator>
      </Navigation>
    </Provider>
  );
}
