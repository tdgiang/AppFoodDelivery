import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');
const orange="#e68a00";
import { colors, sizes, fonts } from '../constants/theme';
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

    },
    circleBox:{
       
      
       backgroundColor:'#d9d9d9',
       justifyContent:'center'
    },
    txtInputCircle:{
        backgroundColor:'#d9d9d9',
        width:70,
        height:70,
        padding:5,
        borderRadius:35,
        fontSize:30,
        textAlign:'center'
    },
    txtInputCircleActive:{
        width:70,
        height:70,
        padding:5,
        borderRadius:35,
        fontSize:30,
        textAlign:'center',
        backgroundColor:orange,
        color:'white'
    },
    txtInputHome:{
        flex:1,
        marginVertical:5,
        paddingHorizontal:20,
        paddingVertical:5,
        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:20
    },
    btnSearch:{
        backgroundColor:colors.gray1,
        borderRadius:25,
        width:40,
        height:40,
        marginLeft:20
         
    },
    imgFoodPopular:{
        width:width/2,
        height:height/3+20,
        borderRadius:sizes.small*2,
        marginVertical:sizes.small
    },
    itemFoodPopular:{
        width:width/2,
    },
    boxFree:{
        borderRadius:sizes.small,
        backgroundColor:colors.orange,
        paddingHorizontal:2
    }




})

export default styles;