import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';
import { connect } from 'react-redux';
import assets from '../constants/data/assects';

class CollectionFood extends Component {
     render() {
            const  {imgCollectionHome,btnIcon,boxShowAll}=styles;
            return (
                <Block  flex={1}   margin={[10,0]}    >
                    <Block  row  space={'between'} >
                    <Text h2 orange  bold >Danh sách </Text>
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
                        {this.props.collections.map(e=>(
                            <TouchableOpacity
                            key={e._id}
                            onPress={()=> this.props.navigation.navigate("CollectionDetail",{listFoods:e.children,id:e._id})}
                            style={{marginRight:15}}
                        >
                            <Image
                            source={assets[e._id]}
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
 const mapStateToProps=(state)=>{
     return{
        collections:state.collections
     }
 }

 export default  connect(mapStateToProps)(CollectionFood);