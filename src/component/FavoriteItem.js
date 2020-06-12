import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity} from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const img=require('../constants/images/login1.jpg')
const imgIcon=require('../constants/images/icons/location.png');
import styles from '../style/styles';


import Rating from './Rating';
export default class FavoriteItem extends Component {
     
    render() {
        const {imgFoodNear,iconBookmark,favoriteBox,row}=styles
        const navigation=this.props.navigation;
        const {_id,name,price,address,rating,img}=this.props.item ;
        return (
            <TouchableOpacity  
                key={_id}
                style={favoriteBox} 
                onPress={()=> navigation.navigate("FoodDetail",{food:this.props.item})}
            >
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
                        <Text bold  h3>{name}</Text>
                        <Text gray >${price}</Text>
                        <View  style={row} >
                            <Image
                                source={imgIcon}
                                style={{width:20,height:20}}

                            />
                            <Text gray numberOfLines={1} >{address}</Text>
                        </View>
                      
                        <Rating rating={rating} />

                        
                       
                    </Block>


                </TouchableOpacity>
            
        );
    }
}