import React, { Component } from 'react';
import { View } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
 
import styles from '../style/styles';


export default class Rating extends Component {
     
    render() {
        const  {boxFree,row}=styles;
        return (
            <View style={row}>
                <Block flex={2} row center >
                    <Icon
                    name={"star"}
                    color={colors.orange}
                    />
                    <Text  > 4.6 </Text>
                    <Text gray > (233 ratings) </Text>
                </Block>
                <View   style={boxFree}  >
                    <Text white >Free delivery</Text>
                </View>
                 
            </View>
 
            
        );
    }
}