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
import SearchResultsScreen from './src/screens/SearchResults';
import Post from './src/components/Posts';
import feed from './assets/data/feed';

const post1= feed[0];
const post2= feed[1];


const App: () => Node = () => {
  return (
    <>
    <StatusBar/>
    <SafeAreaView>
      {/* <HomeScreen/> */}
      {/* <Post post={post1}/> */}
      <SearchResultsScreen/>
    </SafeAreaView>
    </>
  );
};


export default App;
