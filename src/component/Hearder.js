import React, { Component } from 'react';
import { View } from 'react-native';
import {Block,Button,Text} from './index';
import styles from '../style/styles';
 
export default class Header extends Component {
     render() {
            
            return (
                <View  style={styles.headerCollections} >
                <Block  flex={1} row space={'between'} center color={'white'}   padding={[0,20]} >
                    <View />

                    <Text bold h2>{this.props.nameTab}</Text>
                    <View />


                </Block>

            </View>
            );
     }
 }