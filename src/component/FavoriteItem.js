import React, { Component } from 'react';
import { View,Image ,TouchableHighlight } from 'react-native';
import {Block,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const imgIcon=require('../constants/images/icons/location.png');
import styles from '../style/styles';
import Rating from './Rating';

export default class FavoriteItem extends Component {
    render() {
        const {imgFoodNear,favoriteBox,row}=styles
        const navigation=this.props.navigation;
        const {_id,name,price,address,rating,images,range}=this.props.item ;
        return (
            <TouchableHighlight 
                key={_id}
                style={{height:130,marginVertical:10,borderRadius:5}}
                onPress={()=> navigation.navigate("FoodDetail",{food:this.props.item})}
            >
                <View   style={favoriteBox}  >
                   <Image
                        source={{uri:images[0]}}
                        style={imgFoodNear}
                        resizeMode={'cover'}
                    />
                    <Block   space={'between'} margin={[0,10]} >
                        <Text bold  h3>{name}</Text>
                        <Text gray >${price}</Text>
                        <View  style={row} >
                            <Image
                                source={imgIcon}
                                style={{width:20,height:20}}
                            />
                            <Text gray numberOfLines={1} >{address}</Text>
                        </View>
                        <Rating rating={rating} range={range} />
                    </Block>
                </View>
            </TouchableHighlight >
        );
    }
}