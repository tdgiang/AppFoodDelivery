import React, { Component } from 'react';
import { View,TextInput,ScrollView,ImageBackground ,Image,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from '../component/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  img=require('../constants/images/avatar.jpg');
import styles from '../style/styles';
 

export default class EditProfile extends Component {

    constructor(props){
        super(props);
        this.state={
            userName:"Duc Giang",
            email:"tdgiangdev@gmail.com",
            phone:"0866912436",
            gender:"Female",
            birth:"10/09/1998"
        }
    }
     
    render() {
      const  {containerProfile,txtInputProfile,boxAvatar,imgAvatar,boxIconPhoto}=styles;
        const {userName,email,phone,gender,birth}=this.state;
      return (
              <Block middle padding={[0,20]}   >
                  <View  style={containerProfile} >
                      <View  style={boxAvatar} >
                            <Image
                                style={imgAvatar}
                                 
                                source={img}
                            
                            />
                            <TouchableOpacity
                                style={boxIconPhoto}
                            >
                                <Icon
                                    name={"photo"}
                                    color={'white'}
                                    
                                    size={20}
                                />
                            </TouchableOpacity>

                            
                        </View>
                        <View  style={{marginTop:120}} >
                            <TextInput
                                style={txtInputProfile}
                                 
                                value={userName}
                                onChangeText={(val)=>this.setState({userName:val})}

                            >
                                
                         
                                
                            </TextInput>
                            <TextInput
                                style={txtInputProfile}
                                
                                value={email}
                                onChangeText={(val)=>this.setState({email:val})}


                            />
                            <TextInput
                                style={txtInputProfile}
                                value={phone}
                                onChangeText={(val)=>this.setState({phone:val})}
                            />
                            <TextInput
                                style={txtInputProfile}
                                value={gender}
                                onChangeText={(val)=>this.setState({gender:val})}
                            />
                            <TextInput
                                style={txtInputProfile}
                                value={birth}
                                onChangeText={(val)=>this.setState({birth:val})}
                            />
                        </View>

                  </View>
              </Block>
            
        );
    }
}
 
  