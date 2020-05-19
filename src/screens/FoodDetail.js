import React, { Component } from 'react';
import { View,ScrollView,ImageBackground ,TouchableOpacity,Image} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const img=require('../constants/images/che/che01.jpg');


import ContainerFeedBack from '../component/ContainerFeedBack';

const DataFood={
    id:1,
    img,
    name:"Chè khúc bạch",
    adress:"234 Trâu Quỳ",
    freeDelivery:true,
    range:2.3,
    time:33,
    ratings:4.5,
    bookmark:1.2,
    photo:344,
    depcription:"Chè khúc bạch là một món chè không còn xa lạ gì với người Việt, được người dân cả 3 miền yêu thích và thường được ăn nhiều nhất vào mùa hè. Cái tên chè khúc bạch có nguồn gốc chính từ hình dáng của chúng. Chữ “Khúc” nghĩa là cắt thành từng khúc. Chữ bạch là vì món ăn này có màu trắng của kem và sữa tươi."

}


export default class FoodDetail extends Component {
     
    render() {
        const {boxSlideDetail,bodyFoodDetail,boxFree,headerFoodDetail,row,imgFoodDetail}=styles;
        const {name,img,adress,time,range,ratings,bookmark,photo,depcription}=DataFood;
        return (
            <ScrollView
               showsVerticalScrollIndicator={false}
                
               
            >
                <ImageBackground
                    style={boxSlideDetail}
                    source={img}

                >
                       <LinearGradient 
                        start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                        colors={[ 'rgba(0, 0, 0, 0.6)','rgba(256, 256, 256, 0)']}
                        style={{height:100}}
                    >  
                    
                    <View style={headerFoodDetail} >
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.pop()}
                        >
                            <Icon
                                name={'arrow-left'}
                                size={20}
                                color={'white'}
                                 
                            />
                        </TouchableOpacity>
                        <View style={row} >
                        <TouchableOpacity  >
                            <Icon
                                name={'bookmark'}
                                size={20}
                                color={'white'}
                                style={{marginRight:20}}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                name={'shopping-cart'}
                                size={20}
                                color={'white'}

                            />
                        </TouchableOpacity>


                        </View>

                    </View>

                    </LinearGradient>
                    
                </ImageBackground>
                <Block  padding={[0,20]} style={bodyFoodDetail} >
                    <Block padding={[10,0]}  color={'white'} >
                        <Text  h1 >{name}</Text>
                        <Text style={{marginVertical:5}} gray h3 >{adress}</Text>
                        <Block row >
                            <View style={boxFree} >
                                <Text white > Free delivery</Text>
                            </View>
                        
                            
                            <Text  style={{marginHorizontal:30}} >{range} km</Text>
                            <Text    >{time} min</Text>

                        </Block>
                    </Block>
                    <ContainerFeedBack ratings={ratings}  bookmark={bookmark}  photo={photo}  />
                    <Block  padding={[10,0]}  >
                        <Text>
                            {depcription}
                        </Text>
                    </Block>
                    <Block margin={[10,0]} >
                        <Text h2 >Photo</Text>
                        <Block row margin={[10,0]}   >
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                <Image
                                    style={imgFoodDetail}
                                    source={img}

                                />
                                <Image
                                    style={imgFoodDetail}
                                    source={img}

                                />
                                <Image
                                    style={imgFoodDetail}
                                    source={img}

                                />
                                <Image
                                    style={imgFoodDetail}
                                    source={img}

                                />
                            </ScrollView>

                        </Block>


                    </Block>

                </Block>
   
            </ScrollView>
            
        );
    }
}