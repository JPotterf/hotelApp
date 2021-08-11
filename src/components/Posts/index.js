import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{uri:'https://images.unsplash.com/photo-1624374984719-0d146ea066e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' }}
            />
            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}> 1 bedroom and 1 bath</Text>
            {/* Type and Description */}
            <Text style={styles.description} numberOfLines={2}>Description of apartment this is where you will describe the place Description of apartment this is where you will describe the place</Text>
            {/* Old Prices */}
            <Text style={styles.price}>
                <Text style={styles.oldPrice}>$100 </Text>
                <Text style={styles.newPrice}>  $70</Text>
                /Night
            </Text>
            {/* Total Price */}
            <Text style={styles.totalPrice}>$200 Total</Text>


        </View>
    );
};

export default Post;
