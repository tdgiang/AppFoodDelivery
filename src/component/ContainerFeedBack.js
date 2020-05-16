import React, { Component } from 'react';
import { ImageBackground,TouchableOpacity,View } from 'react-native';
import {Block,Button,Text} from './index';
import styles from '../style/styles';
 
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';


export default class ContainerFeedBack extends Component {
     render() {
        const {boxIconProfile}=styles;
            const {ratings,bookmark,photo}=this.props;
            return (
                <Block row    space={'between'} padding={[10,0]} >
                        <Block row  flex={1}  >
                            <View  style={[boxIconProfile,{backgroundColor:colors.yellow}]} >
                                <Icon
                                    name={'star'}
                                    color={'white'}
                                    size={20}
                                />
                            </View>
                            <Block>
                                <Text  >{ratings}</Text>
                                <Text gray>ratings</Text>
                            </Block>

                        </Block>
                        <Block row flex={1}    >
                            <View  style={[boxIconProfile,{backgroundColor:colors.accent}]} >
                                <Icon
                                    name={'bookmark'}
                                    color={'white'}
                                    size={20}
                                />
                            </View>
                            <Block>
                                <Text  >{bookmark}</Text>
                                <Text gray2> Bookmark</Text>
                            </Block>

                        </Block>
                        <Block row flex={1}>
                            <View  style={boxIconProfile} >
                                <Icon
                                    name={'photo'}
                                    color={'white'}
                                    size={20}
                                />
                            </View>
                            <Block>
                                <Text  >{photo}</Text>
                                <Text gray2> Photo</Text>
                            </Block>

                        </Block>
                         
                    </Block>
                
            );
     }
 }