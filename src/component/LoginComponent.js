import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

const LoginComponent = (props) => {
    console.log("props", props)

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#CCCCCC'}}>
            <Button title='Login Screen' onPress={() => props.navigation.navigate('HomeScreen')}>
            
            </Button>
            
        </View>
    );
};


export default LoginComponent;
