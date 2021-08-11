/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';



import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Posts';


const App: () => Node = () => {


  return (
    <>
    <StatusBar/>
    <SafeAreaView>
      {/* <HomeScreen/> */}
      <Post/>
    </SafeAreaView>
    </>
  );
};


export default App;