import React from 'react';
import {Text, View} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Home!</Text>
        </View>
    );
}

export default HomeScreen;