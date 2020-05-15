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
        paddingVertical:10,

        
    },
    btn:{
        borderRadius:20,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
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
        marginHorizontal:15
         
    },
    imgFoodPopular:{
        width:width/2,
        height:height/3+30,
        borderRadius:sizes.small*2,
        marginVertical:sizes.small
    },
    itemFoodPopular:{
        width:width/2,
        marginRight:20
    },
    boxFree:{
        paddingHorizontal:5,
        borderRadius:sizes.small,
        backgroundColor:colors.orange,
         
    },
  
    imgFoodNear:{
        width:100,
        height:100,
        borderRadius:sizes.small,
        marginRight:10
    },
    btnIcon:{
        marginLeft:10
    },
    scrollStyle:{
        flex:1,
        paddingLeft:15,
        backgroundColor:'white'
    },
    imgCollectionHome:{
        width:width/2,
        height:120,
        borderRadius:sizes.small*2
    },
    boxShowAll:{
        flexDirection:'row',
        justifyContent:'center' ,
        alignItems:'center'
    },
    boxTotal:{
        borderBottomWidth:1,
        borderBottomWidth:1,
        borderBottomColor:colors.gray4,
        marginBottom:10
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerOrder:{
         paddingHorizontal:20,
        backgroundColor:colors.gray4,
        paddingVertical:10
    },
    containerOrder:{
        elevation:2,
        backgroundColor:'white',
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:sizes.small
    },
    itemOrder:{
        paddingVertical:10,
        marginHorizontal:20,
        marginVertical:5,
        borderBottomWidth:1,
        borderBottomColor:colors.gray4

    }




})

export default styles;