import React, { Component } from 'react';
import { View ,ScrollView,ImageBackground } from 'react-native';
import {Block,Button,Text} from '../component/index';
import  styles  from '../style/styles';
const img=require('../constants/images/login2.jpg')
import FavoriteItem from '../component/FavoriteItem';

export default class CollectionDetail extends Component {
     
    render() {
        const {boxSlide}=styles
        return (
            <Block
               
            >
                <ImageBackground
                    style={boxSlide}
                    source={img}
                >
                </ImageBackground>
                <ScrollView  
                    style={{paddingHorizontal:20,marginTop:10}}
                    showsVerticalScrollIndicator={false}
                >
                    <Text  h2>23 món</Text>
                    <FavoriteItem />
                    <FavoriteItem />
                    <FavoriteItem />
                    <FavoriteItem />

                </ScrollView>
            </Block>
            
        );
    }
}