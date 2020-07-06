import React, { Component } from 'react';
import { View,Image,TouchableOpacity ,ScrollView } from 'react-native';
import {Block,Button,Text} from '../component/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../style/styles';
const avatar =require('../constants/images/avatar.jpg');
import {connect}  from 'react-redux';
const arrItemclient=[
    {
        id:"pay",
        txtName:"Thanh toán",
        iconName:"credit-card"

    },
    
    {
        id:"History",
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
class Profile extends Component {

    renderProfileItem(item){
        const {row ,rowBetween,boxIconProfile,hr}=styles;
        const {txtName,iconName,id}=item
        return (
            <TouchableOpacity key={id} 
                onPress={()=>this.props.navigation.navigate("History")
                }
            >
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
                                    <Icon
                                        name={"chevron-right"}
                                        size={16}
                                    
                                        style={{marginRight:5}}

                                    />
                                <View  style={hr}  />
                                
                </View>
            </TouchableOpacity>
        )}

    render() {
        const {imgAvatar,row ,boxMember,boxItem,hr}=styles;
       
        return (
           <ScrollView  style={{flex:1}}  >
               <Block  flex={1}     center row  padding={[20,20]} >
                   <Block flex={2}  >
                        <Image
                                source={avatar}
                                style={imgAvatar}
                                resizeMode={'cover'}
                        />
                    </Block>
                    <Block  flex={2}    >
                        <View  style={row } >
                                <Text h2   >{this.props.user.name}</Text>
                                < TouchableOpacity
                                    onPress={()=>this.props.navigation.navigate("EditProfile",{user:this.props.user})
                                    }
                                >
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
                            this.renderProfileItem(e)
                        )}
                        
                        
                    </View>
                    <View   style={boxItem} >
                        {arrItemApp.map(e=>
                            this.renderProfileItem(e)
                        )}
                        
                        
                    </View>
                    
                    
               </Block>
           </ScrollView>
            
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    } 
}

export default  connect(mapStateToProps)(Profile);