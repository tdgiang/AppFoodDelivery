import React, { Component } from 'react';
import { View,Image,TextInput,ScrollView  } from 'react-native';
import {Block,Button,Text} from '../component/index';
import FavoriteItem from '../component/FavoriteItem';
import Header from '../component/Hearder';

import {connect}  from 'react-redux';

class Favorite extends Component {

    renderBody(){
        if(this.props.favorites){
            return(
                this.props.favorites.map((e,index)=>{
                    return <FavoriteItem key={`${index}`} navigation={this.props.navigation} item={e} />
                })
            )
        }
    }
    render() {
        
        return (
            <Block flex={1}>
                <Header  nameTab={"My Favorite"} />

            
            <Block   padding={[10,10,0, 10]}  >
                    
                <ScrollView 
                        style={{flex:1}}
                        showsVerticalScrollIndicator={false}
                >
                  {this.renderBody()}
                
              
                    </ScrollView>
                    
            </Block>
           </Block>
            
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        favorites:state.favorites,
    }
}

export default  connect(mapStateToProps)(Favorite);