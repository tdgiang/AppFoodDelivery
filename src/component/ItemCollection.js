import React, { Component } from 'react';
import { ImageBackground,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import styles from '../style/styles';
import LinearGradient from 'react-native-linear-gradient';
export default class ItemCollection extends Component {
     render() {
            const  {itemCollection}=styles;
            const {img,name,count}=this.props.item;
            return (
                <TouchableOpacity
                    style={itemCollection}
                >
                    <ImageBackground
                        style={itemCollection}
                        source={img}
                        resizeMode={'cover'}
                    >
                        <Block flex={1} />
                        <LinearGradient 
                                start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                                colors={['rgba(256, 256, 256, 0)', 'rgba(0, 0, 0, 0.8)']}
                                style={{flex:1,justifyContent:'center'}}
                        >  
                            <Text white  align={'center'} h3 >{name}</Text>
                            <Text white  align={'center'} h3 >{`${count} món`}</Text>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>
                
            );
     }
 }