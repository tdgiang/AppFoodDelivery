import React, { Component } from 'react';
import { View,TouchableOpacity,ScrollView,Image  } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
import styles from '../style/styles';
import Rating from './Rating';

export default class FoodPopular extends Component {
    constructor(props){
        super(props)
    }
     renderItemFoodPopular(e){
        const  {_id,name,price,address,photo,rating,bookmark,images,range}=e;  
        const {itemFoodPopular,imgFoodPopular}=styles;
        return(
            <TouchableOpacity
                key={_id}
                onPress={()=>this.props.navigation.navigate("FoodDetail",{food:e})}
            >
                <View   style={itemFoodPopular} >
                            <Image
                            source={{uri:images[0]}}
                            style={imgFoodPopular}
                            resizeMode={'cover'}
                            />
                            <Block row  space={'between'}>
                                <Text title bold >{name}</Text>
                                
                            </Block>
                                <Text  title >$ {price}</Text>
                                <Text numberOfLines={1} gray >{address}</Text>
                            <Rating photo={photo} rating={rating} range={range} bookmark={bookmark}  /> 
                </View>
            </TouchableOpacity>
            
        )
    }
     
    render() {
        return (
            <Block  flex={1}       >
                    <Text h2  bold orange >Nổi bật </Text>
                    <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {this.props.popularFoods.map(e=> this.renderItemFoodPopular(e)
                        )}
                    </ScrollView>
                </Block>
            
        );
    }
}