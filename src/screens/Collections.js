import React, { Component } from 'react';
import { View ,FlatList} from 'react-native';
import {Block,Button,Text} from '../component/index';

import DataCollection from '../constants/data/DataCollection';

import ItemCollection from '../component/ItemCollection';

export default class Collections extends Component {
     
    render() {
        return (
            <FlatList
                style={{
                    paddingHorizontal:20
                }}
                columnWrapperStyle={{
                    justifyContent:'space-between'
                }}
                numColumns={2}

                data={DataCollection}
                renderItem={({item,index})=><ItemCollection  navigation={this.props.navigation} item={item} />
                     
                }


            />
            
            
        );
    }
}