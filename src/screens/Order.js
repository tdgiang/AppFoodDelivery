import React, { Component } from 'react';
import { View ,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';

export default class Order extends Component {
     
    render() {
        const {btn,boxTotal,boxFree,headerOrder,rowBetween,containerOrder,itemOrder,btnTotal}=styles
        return (
            <Block   >
                <Block  flex={3}  padding={[10,10]} >
                    <View  style={containerOrder} >
                        <View style={headerOrder} >
                            <Text h1 >Name</Text>
                            <View style={rowBetween}  >
                                <Text   >adress</Text>
                                <Text style={boxFree} >Free delivery</Text>
                            </View>
                        </View>
                        <View  style={itemOrder}  >
                            <View style={rowBetween} >
                                <Text h3 >Ten mon</Text>
                                <View style={rowBetween} >
                                    <TouchableOpacity>
                                        <Text  h2 >+</Text>
                                    </TouchableOpacity>
                                    <Text h3 style={{marginHorizontal:15}} >4</Text>
                                    <TouchableOpacity>
                                        <Text h2 >-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View  style={rowBetween} >
                                <Text gray >material</Text>
                                <Text gray2 >$ 23</Text>
                            </View>
                        </View>
                        <View  style={itemOrder}  >
                            <View style={rowBetween} >
                                <Text h3>Ten mon</Text>
                                <View style={rowBetween} >
                                    <TouchableOpacity>
                                        <Text  h2 >+</Text>
                                    </TouchableOpacity>
                                    <Text h3 style={{marginHorizontal:15}} >4</Text>
                                    <TouchableOpacity>
                                        <Text h2 >-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View  style={rowBetween} >
                                <Text gray >material</Text>
                                <Text gray2 >$ 23</Text>
                            </View>
                        </View>
                        <View  style={itemOrder} >
                            <View style={rowBetween} >
                                <Text h3 >Ten mon</Text>
                                <View style={rowBetween} >
                                    <TouchableOpacity>
                                        <Text  h2 >+</Text>
                                    </TouchableOpacity>
                                    <Text h3 style={{marginHorizontal:15}} >4</Text>
                                    <TouchableOpacity>
                                        <Text h2 >-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View  style={rowBetween} >
                                <Text gray >material</Text>
                                <Text gray2 >$ 23</Text>
                            </View>
                        </View> 
                        <View  style={{paddingHorizontal:20,paddingVertical:10}} >
                            <TouchableOpacity>
                                <Text  accent >Add more items</Text>
                            </TouchableOpacity>
                         </View>
                        
                    </View>
                   
                   
                    

                </Block>
                <Block  flex={1}   padding={[0,20]} color={'white'} >
                    <Block  padding={[10,0]} style={boxTotal} >
                        <Block row   space={'between'} >
                            <Text>Subtotal</Text>
                            <Text>$323</Text>
                        </Block>
                        <Block  row  space={'between'}>
                            <Text>Delivery</Text>
                            <Text>$0</Text>
                        </Block>
                    </Block>
                    <Button  color={'orange'} style={btnTotal}   >
                                <Text />
                                <Text white h3>Continue</Text>
                                <Text white h3 >$323</Text>
                    </Button>
                </Block>
            </Block>
            
        );
    }
}