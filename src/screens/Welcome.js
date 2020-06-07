import React, { Component } from 'react';
import { View,Image,StyleSheet,ImageBackground,StatusBar } from 'react-native';
import {Block,Button,Text} from '../component/index';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {fetchFoods,getFavorite,getOrders} from '../redux/actionCreators';
import {connect}  from 'react-redux';
const bgWelcome=require('../constants/images/bgWelcome1.jpg')


class Welcome extends Component {
    componentDidMount(){
       // this.props.fetchFoods();
        this.props.getFavorite();
        this.props.getOrders();
    }
    render() {
        const  { bgStyle,txtTitle,btn,linearGradient}=styles;
        return (
                 
                <ImageBackground  resizeMode={'cover'} source={bgWelcome}  style={bgStyle}>
                     <LinearGradient 
                        start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                        colors={['rgba(256, 256, 256, 0)', 'rgba(0, 0, 0, 0.8)']}
                        style={linearGradient}
                    >  
                    <Block  flex={1} />
                    <Block  flex={2} >
                        <Text  style={txtTitle}  >DELIVERED</Text>
                        <Text  style={txtTitle}>FAST FOOD</Text>
                        <Text   style={txtTitle} >TO YOUR</Text>
                        <Text  style={txtTitle} >DOOR</Text>
                        <Block  margin={[20,0]} >
                            <Text h3  white >Set exact location to find the right restaurant near you.</Text>
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
        favorites:state.favorites
    }
  }

export default  connect(mapStateToProps,{fetchFoods,getFavorite,getOrders})(Welcome);

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