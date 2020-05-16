import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image  } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';
import Rating from './Rating';

export default class FoodPopular extends Component {
     
    render() {
        const  {imgFoodPopular,itemFoodPopular,boxFree}=styles;
        return (
            <Block  flex={1}       >
                    <Text h1  bold >Nổi bật </Text>
                    <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                   
                    >
                        <View   style={itemFoodPopular} >
                            <Image
                            source={img}
                            style={imgFoodPopular}
                            resizeMode={'cover'}
                            />
                            <Text h3 >Name foood</Text>
                            <Text gray >adress</Text>
                            <Rating /> 
                        </View>
                        <View   style={itemFoodPopular} >
                            <Image
                            source={img}
                            style={imgFoodPopular}
                            resizeMode={'cover'}
                            />
                            <Text h3 >Name foood</Text>
                            <Text gray >adress</Text>
                            <Block  row center  space={'between'} >
                            <Icon
                                name={"star"}
                                color={colors.orange}
                            />

                            <Text  >4.6</Text>
                            <Text gray >(233 ratings)</Text>
                            <View   style={boxFree}  >
                                <Text white >Free delivery</Text>
                            </View>
                            </Block>
                        </View>
                        <View   style={itemFoodPopular} >
                            <Image
                            source={img}
                            style={imgFoodPopular}
                            resizeMode={'cover'}
                            />
                            <Text h3 >Name foood</Text>
                            <Text gray >adress</Text>
                            <Block  row center  space={'between'} >
                            <Icon
                                name={"star"}
                                color={colors.orange}
                            />

                            <Text  >4.6</Text>
                            <Text gray >(233 ratings)</Text>
                            <View   style={boxFree}  >
                                <Text white >Free delivery</Text>
                            </View>
                            </Block>
                        </View>
                    </ScrollView>
                </Block>
            
        );
    }
}