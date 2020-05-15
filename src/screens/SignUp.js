import React, { Component } from 'react';
import { View,TextInput,KeyboardAvoidingView  } from 'react-native';
import {Block,Button,Text} from '../component/index';

import styles from '../style/styles';

export default class SignUp extends Component {
     
    render() {
        const  {btn,txtInput}=styles;
        return (
             <Block  padding={[0,30]} >
                 <Block flex={1}  center middle >
                    <Text  big > Create an account</Text>
                 </Block>
                
                 <Block flex={3}>
                     <KeyboardAvoidingView
                        style={{flex:1}}
                        behavior={'position'}
                     >
                        <TextInput style={txtInput} placeholder={'Username'}  />
                        <TextInput style={txtInput} placeholder={'Email'}  />
                        <TextInput style={txtInput} placeholder={'Phone'}  />
                        <TextInput style={txtInput} placeholder={'Date of birth'}  />
                        <TextInput style={txtInput} placeholder={'Username'}  />
                     </KeyboardAvoidingView>
                 </Block>
                 <Block flex={2}  space={'around'}   >
                        <Button style ={btn} color={'orange'}  >
                            <Text  title white align={'center'} >Sign up</Text>
                        </Button>
                        <Block   flex={0.5} >
                            <Text align={'center'} >By clicking sign up you agree to the following </Text>
                            <Text align={'center'} >Terms and conditions without reservation </Text>
                        </Block>
                        <Text />
                         
                 </Block>

             </Block>
            
        );
    }
}