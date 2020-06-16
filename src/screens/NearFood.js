import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image ,FlatList ,Dimensions,TouchableOpacity} from 'react-native';
import {Block,Button,Text} from '../component/index';
import MapView,{Marker,Circle} from 'react-native-maps';
import {colors}  from '../constants/theme';
import DataFoodNear from '../constants/data/DataFoodNear';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,height}=Dimensions.get('window');
import {connect}  from 'react-redux';
import {addFavorite,addOrder} from '../redux/actionCreators';
const LatLng={
    latitude: 21.004229,
    longitude:105.9354013,
  }
import styles from '../style/styles';
class NearFood extends Component {
    constructor(props){
        super(props);
        this.state={
            foodShow:0
        }
    }
    renderStar(rating){
            let arrStar=[]
            for(let i=0;i<parseInt(rating);i++){
                arrStar.push(
                    <Icon
                        style={{marginRight:5}}
                        key={`${i}`}
                        name={'star'}
                        color={colors.tertiary}
                        size={20}
                    />
                )
            }
            return arrStar
    }
    renderItem(item){
        return(
            <Block flex={1} style={{width:width}} padding={[10,10]} color={'white'}  row>
                <Block>
                    <Image
                        source={item.img}
                        style={{width:width/2-20,height:height/4-50,borderRadius:5}}
                    />
                </Block>
                <Block >
                <View style={styles.row} >
                        <Text style={styles.txtFreeShip} >FreeShip</Text>
                    <Block  row  right >
                        <TouchableOpacity 
                                    onPress={()=>{
                                        if(this.props.favorites==null){
                                            this.props.addFavorite(this.props.route.params.food);
                                        }else{
                                            if(this.props.favorites.find(item=>item._id===item._id)){
                                                alert("Đồ ăn này đã tồn tại trong mục ưa thích!");
                                            }else{
                                                this.props.addFavorite(item);
                                            }

                                        }
                                    }
                                    }
                                >
                                    <Icon
                                        name={'bookmark'}
                                        size={25}
                                        color={colors.orange}
                                        style={{marginRight:20}}

                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>{
                                        if(this.props.orders==null){
                                            this.props.addOrder(item);
                                        }else{
                                            if(this.props.orders.find(item=>item._id===item._id)){
                                                alert("Đồ ăn này đã tồn tại trong mục giỏ hàng!");
                                            }else{
                                                this.props.addOrder(item);
                                            }
                                        }
                                    }
                                    }
                                >
                                    <Icon
                                        name={'shopping-cart'}
                                        size={25}
                                        color={colors.orange}
                                    />
                                </TouchableOpacity>
                    </Block>
            </View>
                    <Block flex={3} space={'around'} >
                        <Text title bold >{item.name}</Text>
                        <Text>Quán:{item.nameStore}</Text>
                        <Text>${item.price} VND</Text>
                        <View  style={styles.row} >
                          {this.renderStar(item.rating)}
                        </View>
                    </Block>

                </Block>
            </Block>
        )
    }
    render() {
        return (
            <Block flex={1} >
                 <View style={styles.boxBack} >
                     <TouchableOpacity
                        onPress={()=>this.props.navigation.pop()}
                     >
                        <Icon
                            name={'chevron-left'}
                            size={25}
                            color={colors.orange}
                           
                        />
                    </TouchableOpacity>
                    </View>
                <Block flex={3} >
                    <MapView
                        style={{flex:1}}
                        initialRegion={{
                        latitude: 21.004229,
                        longitude: 105.9354013,
                        latitudeDelta: 0.0492,
                        longitudeDelta: 0.0121,
                        
                        }}
                    >
                        <Marker
                        title={"My home"}
                        coordinate={LatLng}
                        style={{width:20,height:20}}
                        icon={require('../constants/images/icons/circle.png')}
                        />
                        <Marker
                        title={DataFoodNear[this.state.foodShow].nameStore}
                        coordinate={DataFoodNear[this.state.foodShow].LatLng}
                        icon={require('../constants/images/icons/location1.png')}
                        />

                        <Circle 
                            center={LatLng}
                            radius={2000}
                            strokeWidth={2}
                            strokeColor={colors.lightBlue1}
                        />
                    </MapView>
                </Block>
                <Block  flex={1} >
                   <FlatList
                    data={DataFoodNear}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    decelerationRate={"fast"}
                    snapToAlignment="center"
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>this.renderItem(item)}
                    onScroll={({nativeEvent})=> this.setState({
                        foodShow:parseInt((nativeEvent.contentOffset.x)/(width-30))
                    }) }
                    keyExtractor={item=>item._id}
                    />
                </Block>
            </Block>
            
        );
    }
}
const mapStateToProp=(state)=>{
    return{
        favorites:state.favorites,
        orders:state.orders
    }
}

export default connect(mapStateToProp,{addFavorite,addOrder})(NearFood);
 
  