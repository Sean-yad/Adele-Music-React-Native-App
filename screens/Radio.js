import * as React from 'react';
import { View, Text } from 'react-native';
import RadioYT from '../components/RadioYT';

export default function Radio({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
                <RadioYT />
        </View>
        
       
    );
}