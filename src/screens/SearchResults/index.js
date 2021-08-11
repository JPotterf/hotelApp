import React from 'react'
import { View, FlatList } from 'react-native'
import Post from '../../components/Posts'

import feed from '../../../assets/data/feed';

const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({item})=> <Post post={item}/>} 
            />
        </View>
    )
}

export default SearchResultsScreen;
