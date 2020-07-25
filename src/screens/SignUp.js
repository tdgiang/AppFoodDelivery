import React, { Component } from 'react';
import { View,
    TextInput,
    KeyboardAvoidingView,
     Alert  ,
     TouchableWithoutFeedback,
     Keyboard
} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';

import {signUpFromAPI} from '../saga/api';

export default   class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:"",
            pass:"",
            confirmPass:"",
            name:"",
            phone:"",
            address:""
        }
    }
     
    render() {
        const  {btn,txtInput}=styles;
        const {userName,pass,confirmPass,name,phone,address}=this.state
        return (
            <TouchableWithoutFeedback  onPress={()=>Keyboard.dismiss()} >
             <Block  flex={1} padding={[0,30]} color={'white'}  >
                 <View style={{flex:4}}  >
                        <KeyboardAvoidingView
                            style={{flex:1}}
                            behavior={'position'}
                        >
                            <Text align={'center'} big > Tạo tài khoản</Text>
                            <Block flex={1} margin={[10,0]} >
                                    <TextInput 
                                        style={txtInput} 
                                        placeholder={'Tên đăng nhập'}
                                        onChangeText={(val)=>this.setState({userName:val})}  
                                    />
                                    <TextInput 
                                        style={txtInput} 
                                        placeholder={'Tên'}
                                        onChangeText={(val)=>this.setState({name:val})}  
                                    />
                                    <TextInput 
                                        style={txtInput} 
                                        placeholder={'Số điện thoại'}
                                        keyboardType={'number-pad'}
                                        onChangeText={(val)=>this.setState({phone:val})}  
                                    />
                                    <TextInput 
                                        style={txtInput} 
                                        placeholder={'Địa chỉ'}
                                        onChangeText={(val)=>this.setState({address:val})}  
                                    />
                                    <TextInput 
                                        style={txtInput} 
                                        placeholder={'Mật khẩu'}
                                        onChangeText={(val)=>this.setState({pass:val})} 
                                        secureTextEntry
                                    />
                                    <TextInput 
                                        style={txtInput} 
                                        placeholder={'Nhập lại mật khẩu'}
                                        onChangeText={(val)=>this.setState({confirmPass:val})}
                                        secureTextEntry
                                    />
                            </Block>
                        </KeyboardAvoidingView>
                    </View>
                    <View style={{flex:2}}   >
                            <Button 
                                style ={btn} 
                                color={'orange'} 
                                onPress={()=>{
                                    if(userName && pass && confirmPass && name && phone && address)
                                    {
                                        if(pass===confirmPass){
                                            if(signUpFromAPI({userName,pass,name,phone,address}))
                                                Alert.alert("Thông báo","Đăng ký thành công!")
                                            else
                                                Alert.alert("Thông báo","Đăng ký thất bại!")
                                        }
                                        else
                                            Alert.alert("Thông báo!","Mật khẩu không trùng nhau!");
                                    }else
                                        Alert.alert("Thông báo","Thông tin nhập vào chưa đầy đủ!");
                                }}
                            >
                                <Text  h3 white align={'center'} >Sign up</Text>
                            </Button>

                            <Block   flex={0.5} >
                                <Text align={'center'} >By clicking sign up you agree to the following </Text>
                                <Text align={'center'} >Terms and conditions without reservation </Text>
                            </Block>
                            <Text />
                    </View>
                 
                
             </Block>
          
        </TouchableWithoutFeedback>   
        );
    }
}

