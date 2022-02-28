import React, {useState} from 'react';
import {
  View,
  Text,TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants';

const SettingsScreen = () => {
 
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={'#C7B8F5'}
        barStyle={'dark-content'}
        animated={true}
      />
    
        <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: COLORS.white,
            borderRadius: 15,
            padding: 15,
            shadowColor: '#9e9898',
            elevation: 5,
            marginHorizontal:10
          }}>
          <Image
            source={require('../assets/images/undraw_Meditation_re_gll0.png')}
            style={{width: 50, height: 30, resizeMode: 'center'}}
          />
          <View>
            <Text>Start now</Text>
            <Text>Your trainer is available right now. </Text>
          </View>
        </View>
        </TouchableOpacity>

    </SafeAreaView>
  );
};

export default SettingsScreen;
