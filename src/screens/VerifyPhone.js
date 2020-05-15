import React, { Component } from 'react';
import {TextInput, View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {Block,Button,Text} from '../component/index';

import styles from '../style/styles';

export default class VerifyPhone extends Component {
    constructor(props){
        super(props);
        this.state={
            txtPhone:""
        }
    }
     
    render() {
        const {txtInput,btn}=styles;
        const {txtPhone}=this.state;
        return (
            <KeyboardAvoidingView 
            style={{flex:1}} 
            behavior={'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <Block padding={[50,30]}  flex={1}  space={'around'}     >
                        <Text align='center' big >Verify your phone number</Text>
                        <Text  title align='center' >  {`We have sent you an SMS with a code to number ${txtPhone} `}
                        </Text>
                        <TextInput
                            style={txtInput}
                            keyboardType={'number-pad'}
                            placeholder={' Your phone'}
                            value={txtPhone}
                            onChangeText={(val)=>this.setState({txtPhone:val})}
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