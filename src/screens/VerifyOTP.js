import React, { Component } from 'react';
import {TextInput, View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {Block,Button,Text} from '../component/index';

import styles from '../style/styles';

export default class VerifyOTP  extends Component {
    constructor(props){
        super(props);
        this.state={
            num1:"",
            num2:"",
            num3:"",
            num4:"",
        }
    }
 
     
    render() {
        const {txtInput,btn,circleBox,txtInputCircle,txtInputCircleActive}=styles;
        const {num1,num2,num3,num4}=this.state;
        return (
            <KeyboardAvoidingView 
            style={{flex:1}} 
            behavior={'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <Block padding={[50,30]}  flex={1}  space={'around'}     >
                        <Block>                         
                            <Text align='center' big >Phone Verification</Text>
                            <Text  title align='center' >   Enter your OTP code here
                            </Text>                               
                        </Block>
                        <Block row space={'around'} > 
                                <TextInput  
                                    style={ num1!=""?txtInputCircleActive:txtInputCircle}
                                    keyboardType={'number-pad'}
                                    value={`${num1}`}
                                    
                                    onChangeText={(val)=>{
                                        this.setState({
                                            num1:val
                                        })

                                    }}
                                />
                                <TextInput  
                                    style={ num2!=""?txtInputCircleActive:txtInputCircle}
                                    keyboardType={'number-pad'}
                                    onChangeText={(val)=>{
                                        this.setState({
                                            num2:val
                                        })

                                    }}
                                    value={`${num2}`}
                                />
                                <TextInput  
                                    style={ num3!=""?txtInputCircleActive:txtInputCircle}
                                    value={`${num3}`}
                                    keyboardType={'number-pad'}
                                    onChangeText={(val)=>{
                                        this.setState({
                                            num3:val
                                        })

                                    }}
                                />
                                <TextInput  
                                    style={ num4!=""?txtInputCircleActive:txtInputCircle}
                                    value={`${num4}`}
                                    keyboardType={'number-pad'}
                                    onChangeText={(val)=>{
                                        this.setState({
                                            num4:val
                                        })

                                    }}
                                />    
                                                 
                        </Block>
                        <Block  center >
                            <Text gray >Didn't you received any code?</Text>
                            <Text orange >Resend a new code</Text>
                              
                        </Block>
                        
                    </Block>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}