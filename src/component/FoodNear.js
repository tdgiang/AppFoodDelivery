import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/styles';

import Rating from './Rating';
export default class FoodNear extends Component {
    renderItemFoodNear(item){
        const  {imgFoodNear,rowBetween}=styles;
        const {_id,name,img,images,price,address,photo,rating,bookmark,range,nameStore}=item;
        return(
            <TouchableOpacity
                key={_id}
                onPress={()=>this.props.navigation.navigate("FoodDetail",{food:item})}
            >
                    <Block   
                        row margin={[0,0]} 
                        padding={[5,0]} 
                    >
                        <Image
                            source={{uri:images[0]}}
                            style={imgFoodNear}
                            resizeMode={'cover'}
                            />
                        <Block space={'around'} >
                            <View style={rowBetween}>
                                <Text title bold >{name}</Text>
                                <Text title >{price} $</Text>
                            </View>
                            <Text numberOfLines={1} gray >{nameStore}</Text>
                            <Text numberOfLines={1} gray >{address}</Text>
                            <Block  flex={0.2} row center  space={'between'} >
                                <Rating  photo={photo} range={range} rating={rating}  bookmark={bookmark}  />
                            </Block>
                        </Block>
                    </Block>
                </TouchableOpacity>
        )
    }
     
    render() {
        const  {btnIcon,boxShowAll}=styles;
        return (
            <Block  flex={1}  margin={[10,15,0,0]}     >
                <Block   row  space={'between'} >
                    <Text h2 bold orange >Gần đây </Text>
                    <View  style={boxShowAll}>
                        <Text>Show all</Text>
                         <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("NearFood")}
                         >
                            <Icon
                                    name={"caret-right"}
                                    size={25}
                                    style={btnIcon}
                            />
                         </TouchableOpacity>

                    </View>
                </Block>
                {this.props.nearFoods.map(e=>this.renderItemFoodNear(e) )}
                     
            </Block>
            
        );
    }
}