import React, { Component } from 'react';
import { View,Image,TextInput,ScrollView  } from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import FavoriteItem from '../component/FavoriteItem';
import Header from '../component/Hearder';

import {connect}  from 'react-redux';

class Favorite extends Component {
     
    render() {
         
        return (
            <Block flex={1}>
                <Header  nameTab={"My Favourite"} />

            
            <Block   padding={[10,10,0, 10]}  >
                    
                <ScrollView 
                        style={{flex:1}}
                        showsVerticalScrollIndicator={false}
                
                >
                    {this.props.foods.map(e=>{
                        return <FavoriteItem navigation={this.props.navigation} />
                    })}
                    </ScrollView>
                    
            </Block>
           </Block>
            
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        foods:state.foods
    }
}

export default  connect(mapStateToProps)(Favorite);