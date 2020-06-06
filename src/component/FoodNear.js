import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';



import Rating from './Rating';
export default class FoodNear extends Component {
    renderItemFoodNear(item){
        const  {imgFoodNear,rowBetween}=styles;
        const {_id,name,img,price,address,photo,rating,bookmark}=item;
        return(
            <TouchableOpacity
                key={_id}
                onPress={()=>this.props.navigation.navigate("FoodDetail",{food:item})}
            >
                    <Block   
                        row margin={[0,0]} 
                        padding={[15,0]} 
                        
                    >
                        <Image
                        source={img}
                            style={imgFoodNear}
                            resizeMode={'cover'}
                            />
                        <Block space={'around'} >
                            <View style={rowBetween}>
                                <Text title bold >{name}</Text>
                                <Text title >{price} $</Text>
                            </View>
                            <Text numberOfLines={1} gray >{address}</Text>
                            <Block  flex={0.2} row center  space={'between'} >
                                <Rating  photo={photo} rating={rating}  bookmark={bookmark}  />
                            </Block>
                        </Block>
                    </Block>
                </TouchableOpacity>
        )
    }


     
    render() {
        const  {boxFree,btnIcon,boxShowAll}=styles;
        return (
            <Block  flex={1}  margin={[10,15,0,0]}     >
                <Block   row  space={'between'} >
                    <Text h2 bold >Gần đây </Text>
                    <View  style={boxShowAll}>
                        <Text>Show all</Text>
                         <TouchableOpacity>
                            <Icon
                                    name={"caret-right"}
                                    size={20}
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