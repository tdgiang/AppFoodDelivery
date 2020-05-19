import React, { Component } from 'react';
import { View ,ScrollView,ImageBackground,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from '../component/index';
import  styles  from '../style/styles';
const img=require('../constants/images/login2.jpg')
import FavoriteItem from '../component/FavoriteItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.pop()}
                    >
                        <Icon
                            name={'arrow-left'}
                            size={20}
                            color={'white'}
                            style={{margin:20}}
                        />
                    </TouchableOpacity>

                </ImageBackground>
                <ScrollView  
                    style={{paddingHorizontal:20,marginTop:10}}
                    showsVerticalScrollIndicator={false}
                >
                    <Text  h2>23 món</Text>
                    <FavoriteItem navigation={this.props.navigation} />
                    <FavoriteItem navigation={this.props.navigation} />
                    <FavoriteItem  navigation={this.props.navigation}/>
                    <FavoriteItem navigation={this.props.navigation} />

                </ScrollView>
            </Block>
            
        );
    }
}