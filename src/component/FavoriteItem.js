import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const img=require('../constants/images/login1.jpg')
const imgIcon=require('../constants/images/icons/location.png');
import styles from '../style/styles';

import Rating from './Rating';
export default class FoodNear extends Component {
     
    render() {
        const {imgFoodNear,iconBookmark,favoriteBox,row}=styles
        return (
            <View  style={favoriteBox}  >
                    <Image
                        source={img}
                        style={imgFoodNear}
                        resizeMode={'cover'}
                    />
                    <Block   space={'between'} margin={[0,10]} >
                        <Icon
                            name={'bookmark'}
                            size={30}
                            style={iconBookmark}
                            color={colors.accent}

                        />
                        <Text  h2>Name food</Text>
                        <View  style={row} >
                            <Image
                                source={imgIcon}
                                style={{width:20,height:20}}

                            />
                            <Text gray > Adres2s</Text>
                        </View>
                      
                        <Rating />

                        
                       
                    </Block>


                </View>
            
        );
    }
}