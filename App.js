import React from "react";
import { StackNavigator } from "react-navigation";

import Home from './Home'
import Detail from './detailMovie'

const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail },
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default () => <AppNavigator />;
