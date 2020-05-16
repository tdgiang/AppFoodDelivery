import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome5';
 
import styles from '../style/styles';

import Rating from './Rating';
export default class ProfileItem extends Component {
    constructor(props){
        super(props)
    }
     
    render() {
        const {imgAvatar,row ,boxMember,btnIcon,rowBetween,boxIconProfile,hr}=styles;
        const {id,txtName,iconName}=this.props.item;

        return (
            <View  style={[rowBetween,{paddingVertical:5}]}     >
                            <View  style={row} >
                                <View  style={boxIconProfile} >
                                    <Icon
                                        size={16}
                                        name={iconName}
                                        color={'white'}
                                    />
                                </View>

                                <Text h3 >{txtName}</Text>
                                

                            </View>
                            <TouchableOpacity>
                                <Icon
                                    name={"chevron-right"}
                                    size={16}
                                
                                    style={{marginRight:5}}

                                />
                            </TouchableOpacity>
                            <View  style={hr}  />
                            
            </View>

        );
    }
}