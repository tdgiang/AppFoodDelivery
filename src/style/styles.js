import {StyleSheet,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window');
const orange="#e68a00";
import { colors, sizes, fonts } from '../constants/theme';
const styles=StyleSheet.create({

    imgStyle:{
        width,
        height:height/2.5
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
        height:42
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
        width:width/2+20,
        height:height/3+30,
        borderRadius:sizes.small*2,
        marginVertical:sizes.small
    },
    itemFoodPopular:{
        width:width/2+20 ,
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
        marginLeft:sizes.small*2
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
        alignItems:'center'
    },
    rowBetween:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    
    },
    headerOrder:{
         paddingHorizontal:20,
        backgroundColor:colors.gray4,
        paddingVertical:10
    },
    containerOrder:{
        elevation:3,
        backgroundColor:'white',
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:sizes.small
    },
    itemOrder:{
        height:80,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:sizes.small,
        borderBottomWidth:1,
        borderBottomColor:colors.gray3,
        paddingVertical:5

    },
    rowSwipeOrder:{
        height:80,
        borderBottomWidth:1,
        borderBottomColor:colors.gray3
    },
    btnTotal:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:colors.orange
    },
    iconBookmark:{   
        position:'absolute',
        right:-12,
        top:-5,
        width:20,
        height:30,
    },
    favoriteBox:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingVertical:15,
        paddingHorizontal:10,
        elevation:sizes.small,
        borderRadius:sizes.small,
        height:130,
        borderLeftWidth:2,
        borderLeftColor:colors.gray4,
        borderRightWidth:2,
        borderRightColor:colors.gray4,
    },
    rowSwipeFavorite:{
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent: 'space-between',
        paddingVertical:15,
        paddingHorizontal:10,
        elevation:sizes.small,
        borderRadius:sizes.small,
        marginVertical:sizes.small*2,
        height:130,
    },
    imgAvatar:{
        width:140,
        height:140,
        borderRadius:70,
        borderWidth:2,
        borderColor:'white'
    },
    boxMember:{
        width:120,
        paddingVertical:sizes.small,
        justifyContent:'center',
        alignItems:'center',
         flexDirection:'row',
        borderRadius:sizes.small,
        backgroundColor:colors.red,
        marginTop:sizes.small*2
    },
    boxIconProfile:{
        justifyContent:'center',
        alignItems:'center',
        width:40,
        height:40,
        backgroundColor:colors.lightBlue1,
        borderRadius:25,
        marginRight:sizes.small*2
    },
    boxItem:{
        backgroundColor:'white',
        marginTop:10,
        elevation:3,
        paddingHorizontal:10,
        
    },
    hr:{
        height:1,
        width:width-30,
        bottom:0,
        right:0,
        backgroundColor:colors.gray4,
        position:"absolute",  
    },
    hr1:{
        marginVertical:10,
        height:1,
        backgroundColor:colors.gray4,
        
    },
    itemCollection:{
        width:(width/2)-30,
        height:height/3,
        marginTop:10,
        borderRadius:sizes.small*2,
        overflow:'hidden'

    },
    boxSlide:{
        height:height/3,
        width:width

    },
    bodyFoodDetail:{
        backgroundColor:'white',
         marginTop:-10,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        paddingTop:10
        
    },
    boxSlideDetail:{
        height:height/2,
        width:width
    },
    headerFoodDetail:{
        height:50,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20

    },
    imgFoodDetail:{
        width:120,
        height:120,
        marginRight:10,
        borderRadius:sizes.small
    },
    containerProfile:{
        backgroundColor:'white',
        borderRadius:sizes.small*2,
        elevation:sizes.small,
        marginTop:50
        
    },
    boxAvatar:{
        width:140,
        height:140,
        position:'absolute',
        left:width/2-80,
        top:-60,
        borderRadius:70,
   
    },
    boxIconPhoto:{
        position:'absolute',
        bottom:0,
        right:0,
        width:40,
        height:40,
        backgroundColor:colors.red,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
         
    },
    txtInputProfile:{
        paddingVertical:10,
         fontSize:16,
        borderBottomColor:colors.gray4,
        borderBottomWidth:1,
        marginHorizontal:10,
        marginTop:10

    },
    fullBar:{
        margin:5,
        width:width,
        height:1,
        backgroundColor:colors.gray2,
        marginLeft:-20
    },
    headerCollections:{
        height:50,
        borderBottomColor:colors.gray2,
        borderBottomWidth:1
    
    },
    slideLogin:{
        width,
        height:height/2.5,
         
    } ,
    dot:{
        width:10,
        marginHorizontal:5,
        height:10,
        borderRadius:10,
        backgroundColor:'white'
    },
    // swiper
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius:sizes.small,
        borderBottomRightRadius:sizes.small
       
    },
    stepBtn:{
        color:'white',
        width:100,
        paddingVertical:5,
        backgroundColor:colors.orange,
        textAlign:'center',
        borderRadius:sizes.small,
        marginTop:20
    },
   
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999'
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f'
  },
  footerDelivery:{
      width,
      height:120,
      backgroundColor:'rgba(0,0,0,0.8)',
      position:'absolute',
      bottom:0,
      paddingBottom:10
  },
  boxDelivery:{
      borderRightWidth:2,
      borderBottomWidth:2,
      borderColor:'#000000'
  },
  borderDashed:{
    borderWidth:2,
    borderStyle:'dashed',
    borderColor:colors.orange,
    borderRadius:sizes.small,
    padding:5,
    marginBottom:5
  },
  bodyDelivery:{
      borderRadius:sizes.small,
      elevation:3,
  },
  txtFreeShip:{
      paddingVertical:4,
      color:'white',
      paddingHorizontal:10,
      backgroundColor:colors.orange,
      textAlign:'center',
      borderRadius:sizes.small*2
        
  },
  boxBack:{
      justifyContent:'center',
      alignItems:'center',
      margin:10,
      position:'absolute',
      width:50,height:40,
      backgroundColor:'red',
      top:0,
      zIndex:1,
      backgroundColor:'rgba(255, 255, 255, 0.7)',
      borderRadius:sizes.small
    
    },
    containerItemSearch:{
        borderRadius:sizes.small*2,
        elevation:3,
        borderLeftWidth:2,
        borderLeftColor:colors.gray4,
        borderRightWidth:2,
        borderRightColor:colors.gray4,
        padding:10,
        backgroundColor:colors.white,
        marginVertical:10
    },
    boxHistory:{
        elevation:4,
        borderRadius:sizes.small
    }
   
  


})

export default styles;