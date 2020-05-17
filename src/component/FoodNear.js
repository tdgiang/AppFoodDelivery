import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';
import ItemFoodNear from '../component/ItemFoodNear';


import Rating from './Rating';
export default class FoodNear extends Component {
     
    render() {
        const  {imgFoodNear,itemFoodNear,boxFree,btnIcon,boxShowAll}=styles;
        return (
            <Block  flex={1}  margin={[10,15,0,0]}     >
                <Block   row  space={'between'} >
                    <Text h2 bold >Gần đây </Text>
                    <View  style={boxShowAll}>
                        <Text>Show all</Text>
                         <TouchableOpacity>
                            <Icon
                                    name={"caret-right"}
                                    size={20}
                                    style={btnIcon}
                            />
                         </TouchableOpacity>

                    </View>
                </Block>
                    
               <ItemFoodNear />
               <ItemFoodNear />
               <ItemFoodNear />
               
                 
                
                
                
                    
            </Block>
            
        );
    }
}