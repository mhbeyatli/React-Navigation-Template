import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import 'react-native-paper';

import LoadingComponent from '../component/LoadingComponent';

import LoginComponent from '../component/LoginComponent';

import ContactComponent from '../component/ContactComponent';
import MessagesComponent from '../component/MessagesComponent';
import NotificationComponent from '../component/NotificationComponent';

const Tabnavigator = createMaterialBottomTabNavigator({
    MessageScreen: {
        screen: MessagesComponent,
        navigationOptions: {
            tabBarLabel: 'Message'
        }
    },
    ContactScreen: {
        screen: ContactComponent,
        navigationOptions: {
            tabBarLabel: 'Contact'
        }
    },
    NotificationScreen: {
        screen: NotificationComponent,
        navigationOptions: {
            tabBarLabel: 'Notification'
        }
    },
})


export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingComponent,
            Auth: LoginComponent,
            App: Tabnavigator
        }, 
        {
            initialRouteName: 'Loading'
        }
    )
);