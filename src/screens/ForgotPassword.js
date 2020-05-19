import React, { Component } from 'react';
import { View ,TextInput,StyleSheet,KeyboardAvoidingView ,Keyboard,TouchableWithoutFeedback} from 'react-native';
import {Block,Button,Text} from '../component/index';
import  styles from '../style/styles';
export default class ForgotPassword extends Component {
     
    render() {
        const {txtInput,btn}=styles;
        return (
            <KeyboardAvoidingView 
            style={{flex:1}} 
            behavior={'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <Block padding={[50,30]}  flex={1}  space={'around'}  color={'white'}   >
                        <Text align='center' big >Forgot password</Text>
                        <Text  title align='center' >Please enter your email address.You will receive a link
                            to create a new a password via email.
                        </Text>
                        <TextInput
                            style={txtInput}
                            placeholder={'Your email'}
                        />

                        <Button  color={'orange'} style={btn} >
                            <Text  title  white align={'center'} >Send</Text>
                        </Button>
                        
                    </Block>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

 