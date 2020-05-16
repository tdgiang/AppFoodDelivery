import React, { Component } from 'react';
import { View,Image,TextInput,ScrollView  } from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import FavoriteItem from '../component/FavoriteItem';
 
export default class Favorite extends Component {
     
    render() {
         
        return (
           <Block   padding={[10,10,0, 10]}  >
               <ScrollView 
                    style={{flex:1}}
                    showsVerticalScrollIndicator={false}
               
               >
                    <FavoriteItem />
                    <FavoriteItem />
                    <FavoriteItem />
                    <FavoriteItem />
                    <FavoriteItem />
                </ScrollView>
                
           </Block>
            
        );
    }
}