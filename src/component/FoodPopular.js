import React, { Component } from 'react';
import { View,TouchableOpacity,ScrollView,Image  } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';
import Rating from './Rating';

export default class FoodPopular extends Component {


    rederItemFoodPopular(){
        const  {imgFoodPopular,itemFoodPopular}=styles;
        return(
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("FoodDetail")}
            >
                <View   style={itemFoodPopular} >
                            <Image
                            source={img}
                            style={imgFoodPopular}
                            resizeMode={'cover'}
                            />
                            <Block row  space={'between'}>
                                <Text title bold >Name foood</Text>
                                <Text title >33 $</Text>
                            </Block>
                            
                            <Text gray >adress</Text>
                            <Rating /> 
                </View>
            </TouchableOpacity>
            
        )
    }
     
    render() {
        const  {imgFoodPopular,itemFoodPopular,boxFree}=styles;
        return (
            <Block  flex={1}       >
                    <Text h1  bold >Nổi bật </Text>
                    <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                   
                    >
                        {this.rederItemFoodPopular()}
                        {this.rederItemFoodPopular()}
                        {this.rederItemFoodPopular()}
                        {this.rederItemFoodPopular()}
                        
                        
                    </ScrollView>
                </Block>
            
        );
    }
}