import React, { Component } from 'react';
import { View,ScrollView,ImageBackground ,TouchableOpacity,Image, Alert} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {addFavorite,addOrder} from '../redux/actionCreators';
import ContainerFeedBack from '../component/ContainerFeedBack';

 class FoodDetail extends Component {
    render() {
        const {boxSlideDetail,bodyFoodDetail,boxFree,headerFoodDetail,row,imgFoodDetail}=styles;
        const {_id,name,images,address,bookmark,photo,description,rating,nameStore,range}=this.props.route.params.food;
        return (
            <ScrollView
               showsVerticalScrollIndicator={false}
              
            >
                <ImageBackground
                    style={boxSlideDetail}
                    source={{uri:images[0]}}
                    key={_id}
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
                            <TouchableOpacity
                                onPress={()=>{
                                    if(this.props.orders==null){
                                        this.props.addOrder(this.props.route.params.food);
                                    }else{
                                        if(this.props.orders.find(item=>item._id===_id)){
                                            alert("Đồ ăn này đã tồn tại trong mục giỏ hàng!");
                                        }else{
                                            this.props.addOrder(this.props.route.params.food);
                                        }

                                    }
                                }
                                }
                            >
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
                            <Text bold style={{marginRight:30}} >{nameStore}</Text>

                            {range<10?(<View style={boxFree} >
                                <Text white > Free delivery</Text>
                            </View>):(<Text  style={{marginHorizontal:30}} > {`${range} km`}</Text>)}
                            
                            
                        </Block>
                    </Block>
                    <ContainerFeedBack ratings={rating}  bookmark={bookmark}  photo={photo}  />
                    <Block  padding={[10,0]}  >
                        <Text>
                            {description}
                        </Text>
                    </Block>
                    <Block margin={[10,0]} >
                        <Text h2 >Photos</Text>
                        <Block row margin={[10,0]}   >
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                {images.slice(1).map((e,index)=> <Image
                                    key={`${index}`}
                                    style={imgFoodDetail}
                                    source={{uri:e}}
                                />
                                )
                                }
                               
                               
             
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
        favorites:state.favorites,
        orders:state.orders
    }
}

export default connect(mapStateToProp,{addFavorite,addOrder})(FoodDetail);