import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin: 20, 
    },
    
    image:{
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    bedrooms:{
        marginVertical: 5,
        fontSize: 16,
        color: '#5b5b5b',
    },
    description:{
        fontSize: 18,
        lineHeight: 26,

    },    
    type:{
        fontSize: 18,
    },
    prices:{
        fontSize: 16,
    },
    oldPrice:{
        color:'#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price:{
        fontWeight: 'bold',
    },
    totalPrice:{
        color: '#5b5b5b',
        textDecorationLine:'underline',
        fontSize:16,
    },
});

export default styles;