import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';

 export default class CollectionFood extends Component {
     
     render() {
            const  {imgCollectionHome,btnIcon,boxShowAll}=styles;
            return (
                <Block  flex={1}   margin={[10,0]}    >
                    <Block  row  space={'between'} >
                    <Text h2  bold >Danh sách </Text>
                    <View style={[boxShowAll,{marginRight:15}]} >
                        <Text>Show all</Text>
                         <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate("Collections") }
                         >
                            <Icon
                                    name={"caret-right"}
                                    size={20}
                                    style={btnIcon}
                            />
                         </TouchableOpacity>

                    </View>
                    </Block>
                    <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginVertical:10}}
                
                    >
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate("CollectionDetail")}
                            style={{marginRight:15}}
                        >
                            <Image
                            source={img}
                            style={imgCollectionHome}
                            resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{marginRight:15}}
                        >
                            <Image
                            source={img}
                            style={imgCollectionHome}
                            resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{marginRight:15}}
                        >
                            <Image
                            source={img}
                            style={imgCollectionHome}
                            resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                    
                    </ScrollView>
                </Block>
                
            );
     }
 }