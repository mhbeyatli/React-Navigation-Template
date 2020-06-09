import React, {useEffect} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const MessagesComponent = (props) => {

    useEffect(() => {
        console.log("Merhaba")
    },[])

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#CCCCCC'}}>
            <Button title='Loading Screen' onPress={() => props.navigation.navigate('App')} >
            
            </Button>
        </View>
    );
};


export default MessagesComponent;
