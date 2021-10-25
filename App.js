import React, { useState } from 'react';
import { ApolloProvider as Provider } from 'react-apollo'
import { NavigationContainer as Navigation, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Favorites, Home, Search, Anime, Settings } from './components'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Client from './graphql'
import { useColorScheme } from 'react-native';
import ApolloClient from 'apollo-boost'

const { Screen, Navigator } = createMaterialBottomTabNavigator();
const Client = new ApolloClient({
  uri: "https://graphql.anilist.co"
});
export default function App({ navigation }) {
  const scheme = useColorScheme();
  const [darkMode, setDarkMode] = useState(false)
  const theme = darkMode ? DarkTheme : DefaultTheme
  return (
    <Provider client={Client} >
      <Navigation theme={theme}>
        <Navigator
          sceneAnimationEnabled
          initialRouteName="Home"
          activeColor="#fafafa"
        >
          <Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icons name="home" color={color} size={26} />
              ),
            }}
          />
          <Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color }) => (
                <Icons name="magnify" color={color} size={26} />
              ),
            }}
          />
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
          />
        </Navigator>
      </Navigation>
    </Provider>
  );
}
