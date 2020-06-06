import React, { Component } from 'react';
import { View,ScrollView,ImageBackground ,TouchableOpacity,Image, Alert} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
const img=require('../constants/images/che/che01.jpg');
import {addFavorite} from '../redux/actionCreators';

import ContainerFeedBack from '../component/ContainerFeedBack';


 class FoodDetail extends Component {
     
    render() {
        const {boxSlideDetail,bodyFoodDetail,boxFree,headerFoodDetail,row,imgFoodDetail}=styles;
        const {_id,name,img,address,bookmark,photo,description,rating,nameStore}=this.props.route.params.food;
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
                        <TouchableOpacity 
                            onPress={()=>{
                                if(this.props.favorites==null){
                                    this.props.addFavorite(this.props.route.params.food);
                                }else{
                                    if(this.props.favorites.find(item=>item._id===_id)){
                                        alert("Đồ ăn này đã tồn tại trong mục ưa thích!");
                                    }else{
                                        this.props.addFavorite(this.props.route.params.food);
                                    }

                                }
                                
                            }
                            }
                        >
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
                        <Text style={{marginVertical:5}} gray h3 >{address}</Text>
                        <Block row >
                            <View style={boxFree} >
                                <Text white > Free delivery</Text>
                            </View>
                        
                            
                            <Text  style={{marginHorizontal:30}} > 3.2 km</Text>
                        </Block>
                    </Block>
                    <ContainerFeedBack ratings={rating}  bookmark={bookmark}  photo={photo}  />
                    <Block  padding={[10,0]}  >
                        <Text>
                            {description}
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
             
                            </ScrollView>

                        </Block>


                    </Block>

                </Block>
   
            </ScrollView>
            
        );
    }
}
const mapStateToProp=(state)=>{
    return{
        favorites:state.favorites
    }
}

export default connect(mapStateToProp,{addFavorite})(FoodDetail);