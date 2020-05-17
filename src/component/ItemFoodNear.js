import React, { Component } from 'react';
import { View,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';
import Rating from './Rating';
export default class ItemFoodNear extends Component {
     
    render() {
        const  {imgFoodNear}=styles;
        return (
                <TouchableOpacity>
                    <Block   
                        row margin={[0,0]} 
                        padding={[15,0]} 
                        
                    >
                        <Image
                        source={img}
                            style={imgFoodNear}
                            resizeMode={'cover'}
                            />
                        <Block space={'around'} >
                            <Text h3 >Name foood</Text>
                            <Text gray >adress</Text>
                            <Block  flex={0.2} row center  space={'between'} >
                                <Rating  />
                            </Block>
                        </Block>
                    </Block>
                </TouchableOpacity>
        );
    }
}