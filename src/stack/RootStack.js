import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ContactComponent from '../component/ContactComponent';
import LoginComponent from '../component/LoginComponent';
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

const Stacknavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    HomeScreen: {
        screen: Tabnavigator,
        navigationOptions: {
            headerShown: false
        }
    }
});

export const Rororo = createAppContainer(Stacknavigator);