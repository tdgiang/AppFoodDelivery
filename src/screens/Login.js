import React, { Component } from 'react';
import { View,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
    FlatList,
    Animated
} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const {width,height}=Dimensions.get('window');
const data=[
    {
        id:'1',
        img:require('../constants/images/login2.jpg'),

    },
    {
        id:'2',
        img:require('../constants/images/login03.png'),
    },
    {
        id:'3',
        img:require('../constants/images/login04.jpg'),
    }
];

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            scrollX : new Animated.Value(0)
        }
     
         
        
    }

  
 
    infiniteScroll(dataList){
        const numberOfData = dataList.length
        let scrollValue = 0, scrolled = 0
    
        setInterval(function() {
            scrolled ++
            if(scrolled < numberOfData)
            scrollValue = scrollValue + width
    
            else{
                scrollValue = 0
                scrolled = 0
            }
         
             

        }, 3000)
    }
    
 

    renderViewDot=()=>(
        <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                colors={['rgba(256, 256, 256, 0)', 'rgba(0, 0, 0, 0.5)']}
                style={{flex:1}}
            >  
                <Block flex={1} row center middle >
                    {data.map((val,index)=>{
                        let position = Animated.divide(this.state.scrollX, width)
                        let opacity = position.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={index}
                                style={{ opacity, height: 10, width: 10, backgroundColor: 'white', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}
                </Block> 
            </LinearGradient>        
    )

    renderItem=(item)=>(
            <ImageBackground key={item.id}
                resizeMode={'cover'}
                source={item.img}
                style={styles.imgStyle}
            >
                 <TouchableOpacity
                                    onPress={()=>this.props.navigation.pop()}
                                >
                                    <Icon
                                        name={'arrow-left'}
                                        size={20}
                                        color={'white'}
                                        style={{margin:20}}
                                />
                </TouchableOpacity>

              
                
                
            
            </ImageBackground>
        )
    
    render() {
        const {body,txtInput,btn,slideLogin}=styles
        return (
            <KeyboardAvoidingView 
                style={{flex:1}} 
                behavior={'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <Block flex={1} >
                        <View  style={slideLogin}  >
                            <FlatList
                                ref={"flatList"}
                                data={data}
                                style={{zIndex:0}}
                                horizontal
                                pagingEnabled
                                scrollEnabled
                                decelerationRate={"fast"}
                                snapToAlignment="center"
                                decelerationRate={0}
                                scrollEventThrottle={16}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item})=>this.renderItem(item)}
                                onScroll={({nativeEvent})=> this.setState({
                                    scrollX:nativeEvent.contentOffset.x
                                })
                                }
                            />  
                             
                            <View  style={{height:50,position:'absolute',bottom:10,width}} >
                                {this.renderViewDot()}
                                
                            </View>
                        </View>
                        <Block  
                            style={body} 
                            flex={1} margin={[-15,0,0,0]}
                            color={'white'}
                        >
                                <Block flex={2}  middle center  >
                                    <Text big >Welcome back</Text>
                                    <Text  gray title  >Login to your account</Text>
                                </Block>
                                <Block flex={4}   space={'between'} padding={[0,30]}  >
                                    <TextInput
                                        style={txtInput}
                                        placeholder={'Email'}
                                        
                                    />
                                    <TextInput
                                        style={txtInput}
                                        placeholder={'Password'}
                                        
                                    />
                                    <Button onPress={()=>this.props.navigation.replace("tabNavigation")} style={btn}  color={'orange'}  >
                                        <Text title white >Login</Text>
                                    </Button>
                                    <TouchableOpacity
                                        onPress={()=>this.props.navigation.navigate("ForgotPassword")}
                                    >
                                        <Text  align={'center'} >Forgot your password?</Text>
                                    </TouchableOpacity>

                                </Block>
                                <Block flex={1}  middle  center  row  >
                                    <Text title >Don't have an account? </Text>
                                    <TouchableOpacity
                                        onPress={()=>this.props.navigation.navigate("SignUp")}
                                    >
                                        <Text  title  color={'orange'}  >Sign up</Text>
                                    </TouchableOpacity>
                                </Block>
                        </Block>
                    </Block>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            
            
        );
    }
}


