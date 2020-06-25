import React, { Component } from 'react';
import { View,Image,StyleSheet,ImageBackground,ActivityIndicator,Dimensions  } from 'react-native';
import {Block,Button,Text} from '../component/index';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {fetchFoods,getFavorite,getOrders} from '../redux/actionCreators';
import {getHistory} from '../redux/action/actionHistory';
import {fetchCollections}  from '../redux/action/actionCollections';
import {connect}  from 'react-redux';
const bgWelcome=require('../constants/images/bgWelcome1.jpg')
const {width,height}=Dimensions.get('window');

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:true
        }
    }
    UNSAFE_componentWillMount(){
        this.props.fetchCollections();
        this.props.fetchFoods();
        this.props.getFavorite();
        this.props.getHistory();
        this.props.getOrders();
        setTimeout(()=>this.setState({loading:false}),2000)
    }
    render() {
        const  { bgStyle,txtTitle,btn,linearGradient}=styles;
        const {loading}=this.state;
        console.log(this.props.history);
        
        return (
                <ImageBackground  resizeMode={'cover'} source={bgWelcome}  style={bgStyle}>
                     <LinearGradient 
                        start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                        colors={['rgba(256, 256, 256, 0)', 'rgba(0, 0, 0, 0.8)']}
                        style={linearGradient}
                    >  
                    {loading?(  
                    <LinearGradient 
                        start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                        colors={['rgba(256, 256, 256, 0)', 'rgba(0, 0, 0, 0.7)']}
                        style={{ width,
                            height,
                            position:'absolute',
                            zIndex:1,
                            justifyContent:'center',
                            alignItems:'center'}}
                    >  
                        <ActivityIndicator size="large" color="#FF8C00" />
                    </LinearGradient>
                    ):(<View />)
                    
                    }
                    <Block  flex={1} />
                 
                    <Block  flex={2} >
                        
                   
                        <Text  style={txtTitle}  >DELIVERED</Text>
                        <Text  style={txtTitle}>FAST FOOD</Text>
                        <Text   style={txtTitle} >TO YOUR</Text>
                        <Text  style={txtTitle} >DOOR</Text>
                        <Block  margin={[20,0]} >
                            <Text h3  white  >Giao hàng cực nhanh </Text>
                            <Text h3  white  >Như cách người yêu cũ trở mặt :3</Text>
                        </Block>
                    </Block>
                   
                    <Block  flex={1} middle  >
                        <Button  
                            style={btn}  
                            color={'orange'} 
                            onPress={()=>this.props.navigation.navigate("Login")}
                        >
                            <Text h3 white >Login</Text>      
                        </Button>
                        <Button style={btn}   color={'lightBlue'} >
                            <Icon 
                                name={'facebook'}
                                size={25}
                                color={'white'}
                                style={{marginRight:10}}
                            />
                            <Text h3 white > Connect with facebook</Text>
                        </Button>
                    </Block>
                    </LinearGradient> 
                </ImageBackground>
            
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        favorites:state.favorites,
        orders:state.orders,
        collections:state.collections,
        history:state.history
    }
  }

export default  connect(mapStateToProps,{fetchFoods,getFavorite,getOrders,fetchCollections,getHistory})(Welcome);

const styles=StyleSheet.create({
    bgStyle:{
        flex:1
    },
    txtTitle:{
        fontSize:40,
        color:'white',
        fontWeight:'600'
    },


    imgLogo:{
        width:200,
        height:80
    },
    btn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        
    },
    linearGradient:{
        flex:1,
        paddingHorizontal:30
    }


})