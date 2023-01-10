import * as React from 'react';
import { View, Text } from 'react-native';
import PodcastYT from '../components/PodcastYT';

export default function Podcast({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            
      <PodcastYT />
</View>
  
    );
}
