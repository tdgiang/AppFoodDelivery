import React, { Component } from 'react';
import { View,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const img=require('../constants/images/login2.jpg')

export default class Login extends Component {
     
    render() {
        const {imgStyle,body,txtInput,btn}=styles
        return (
            <KeyboardAvoidingView 
                style={{flex:1}} 
                behavior={'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <Block flex={1} >
                        <Block  flex={3}  >
                            <ImageBackground
                                resizeMode={'cover'}
                                source={img}
                                style={imgStyle}
                                
                            >
                                <TouchableOpacity>
                                    <Icon
                                        name={'arrow-left'}
                                        size={20}
                                        color={'white'}
                                        style={{margin:20}}

                                    />
                                </TouchableOpacity>

                            </ImageBackground>
                        </Block>

                        <Block  
                            style={body} 
                            flex={4} margin={[-5,0,0,0]}
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
                                    <Button onPress={()=>this.props.navigation.navigate("Home")} style={btn}  color={'orange'}  >
                                        <Text title white >Login</Text>
                                    </Button>
                                    <TouchableOpacity>
                                        <Text  align={'center'} >Forgot your password?</Text>
                                    </TouchableOpacity>

                                </Block>
                                <Block flex={1}  middle  center  row  >
                                    <Text title >Don't have an account? </Text>
                                    <TouchableOpacity>
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


