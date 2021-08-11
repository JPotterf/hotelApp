import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = (props) => {
    const post = props.post;
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{uri:post.image}}
            />
            
            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}> {post.bedroom} Bedroom and {post.bath} bathroom</Text>
            {/* Type */}
            <Text style={styles.type}>{post.type}</Text>
            {/* Description */}
            <Text style={styles.description} numberOfLines={2}>{post.title}</Text>
            {/* Old Prices */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice} </Text>
                <Text style={styles.price}>  ${post.newPrice}</Text>
                /Night
            </Text>
            {/* Total Price */}
            <Text style={styles.totalPrice}>${post.totalPrice} Total</Text>
            

        </View>
    );
};

export default Post;
