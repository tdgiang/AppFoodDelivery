import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles=StyleSheet.create({

    imgStyle:{
        width,
        height:(height*3)/7
    },
    body:{
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
         
    },
    txtInput:{
        backgroundColor:'#e6e6e6',
        paddingHorizontal:20,
        marginVertical:5,
        borderRadius:20,
        paddingVertical:10

         
    },
    btn:{
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:5

    }




})

export default styles;