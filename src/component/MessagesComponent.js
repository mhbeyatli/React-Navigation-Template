import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const MessagesComponent = (props) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#CCCCCC'}}>
            <Button title='Messages Screen' onPress={() => props.navigation.navigate('LoginScreen')}>
            
            </Button>
        </View>
    );
};


export default MessagesComponent;
