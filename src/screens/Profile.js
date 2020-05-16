import React, { Component } from 'react';
import { View,Image,TouchableOpacity ,ScrollView } from 'react-native';
import {Block,Button,Text} from '../component/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../style/styles';
const avatar =require('../constants/images/avatar.jpg');
import ProfileItem from '../component/ProfileItem';

const arrItemclient=[
    {
        id:"pay",
        txtName:"Thanh toán",
        iconName:"credit-card"

    },
    
    {
        id:"history",
        txtName:"Lịch sử",
        iconName:"history"

    },
    {
        id:"addfriend",
        txtName:"Mời bạn bè",
        iconName:"user-plus"

    }
]
const arrItemApp=[
    {
        id:"feedback",
        txtName:"Góp ý",
        iconName:"mail-bulk"

    },
    
    {
        id:"term",
        txtName:"Chính sách",
        iconName:"question"

    },
    {
        id:"setting",
        txtName:"Cài đặt ứng dụng",
        iconName:"cog"

    }
]
export default class Profile extends Component {
     
    render() {
        const {imgAvatar,row ,boxMember,boxItem,hr}=styles;
        return (
           <ScrollView  style={{flex:1}}  >
               <Block  flex={1}     center row  padding={[20,20]} >
                   <Block flex={1}  >
                        <Image
                                source={avatar}
                                style={imgAvatar}
                                resizeMode={'cover'}
                        />
                    </Block>
                    <Block  flex={2}    >
                        <View  style={row } >
                                <Text h2   >Your Name</Text>
                                < TouchableOpacity>
                                    <Icon
                                        name={"chevron-right"}
                                        size={16}
                                        color={'gray'}
                                        style={{marginLeft:40}}
                                    />
                                </TouchableOpacity>
                        </View>
                        <View style={boxMember} >
                            <Icon
                                name={'crown'}
                                color={'white'}
                                style={{marginRight:5}}

                            />

                            <Text  white align={'center'}  >Vip member</Text>
                        </View>
                        
                    </Block>
                    

                   
               </Block>
               <Block flex={3}  >
                    <View   style={boxItem} >
                        {arrItemclient.map(e=>
                            <ProfileItem key={e.id} item={e} />

                        )}
                        
                        
                    </View>
                    <View   style={boxItem} >
                        {arrItemApp.map(e=>
                            <ProfileItem key={e.id} item={e} />

                        )}
                        
                        
                    </View>
                    
                    
               </Block>
           </ScrollView>
            
        );
    }
}