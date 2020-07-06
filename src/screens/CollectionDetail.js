import React, { Component } from 'react';
import { View ,ScrollView,ImageBackground,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from '../component/index';
import  styles  from '../style/styles';
const img=require('../constants/images/login2.jpg')
import FavoriteItem from '../component/FavoriteItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import assects from '../constants/data/assects';
export default class CollectionDetail extends Component {
     
    render() {
        const {boxSlide}=styles;
        const {listFoods,id}=this.props.route.params;
        return (
            <Block
               
            >
                <ImageBackground
                    style={boxSlide}
                    source={assects[id]}
                    resizeMode={'cover'}
                >
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.pop()}
                    >
                        <Icon
                            name={'arrow-left'}
                            size={20}
                            color={'black'}
                            style={{margin:10}}
                        />
                    </TouchableOpacity>

                </ImageBackground>
                <ScrollView  
                    style={{paddingHorizontal:20,marginTop:10}}
                    showsVerticalScrollIndicator={false}
                >
                    <Text orange h3>{`${listFoods.length} món`}</Text>
                    {listFoods.map(e=><FavoriteItem key={e._id} navigation={this.props.navigation} item={e}  />)}
                </ScrollView>
            </Block>
            
        );
    }
}