import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';
import DataCollection from '../constants/data/DataCollection';
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
                                    size={25}
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
                        {DataCollection.map(e=>(
                            <TouchableOpacity
                            key={e._id}
                            onPress={()=> this.props.navigation.navigate("CollectionDetail")}
                            style={{marginRight:15}}
                        >
                            <Image
                            source={e.img}
                            style={imgCollectionHome}
                            resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                        ))}
                    </ScrollView>
                </Block>
                
            );
     }
 }