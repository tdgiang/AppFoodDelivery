import React, { Component } from 'react';
import { View,
    Image,
    StyleSheet,
    ImageBackground,
    ActivityIndicator,
    Dimensions ,
    Animated
} from 'react-native';
import {Block,Button,Text} from '../component/index';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {fetchFoods,getFavorite,getOrders} from '../redux/actionCreators';
import {getHistory} from '../redux/action/actionHistory';
import {fetchCollections}  from '../redux/action/actionCollections';
import {connect}  from 'react-redux';
import { Easing } from 'react-native-reanimated';
const bgWelcome=require('../constants/images/bgWelcome1.jpg')
const {width,height}=Dimensions.get('window');

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:true,
            aniLocation:new Animated.Value(-400)
        }
    }
    componentDidMount(){
        this.props.fetchCollections();
        this.props.fetchFoods();
        this.props.getFavorite();
        this.props.getHistory();
        this.props.getOrders();
        setTimeout(()=>{
            this.setState({loading:false})
            Animated.spring(
                this.state.aniLocation,
                {
                    toValue:0,
                    tension:50,
                    friction:10,
                    useNativeDriver:false
                },
                
            ).start();
        }
        ,2000)

    }
    render() {
        const  { bgStyle,txtTitle,btn,linearGradient}=styles;
        const {loading}=this.state;
    
        
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
                        <Text  style={txtTitle}  >FAST FOOD</Text>
                        <Text   style={txtTitle} >TO YOUR</Text>
                        <Text  style={txtTitle} >DOOR</Text>
                        <Block  margin={[40,0]} row >
                            <Animated.View
                                style={{
                                    left:this.state.aniLocation
                                }}
                            >
                                
                                    <Text h3  white  >Giao hàng cực nhanh </Text>
                                    <Text h3  white  >Như cách người yêu cũ trở mặt :3</Text>
                            </Animated.View>
                            <Animated.View
                                style={{
                                    left:this.state.aniLocation,
                                    marginLeft:10,

                                }}
                            >
                                    <Image  
                                        source={require('../constants/images/motorcycle.png')}
                                        style={{width:50,height:50}}
                                    />

                            </Animated.View>
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