import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image  } from 'react-native';
import {Block,Button,Text} from '../component/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';
import FoodPopular from '../component/FoodPopular';
import FoodNear from '../component/FoodNear';
import CollectionFood from '../component/CollectionFood';

export default class Home extends Component {
     
    render() {
      const  {scrollStyle,txtInputHome,btnSearch,imgFoodPopular,itemFoodPopular,boxFree}=styles;
        return (
             <ScrollView 
                style={scrollStyle}   
                showsVerticalScrollIndicator={false}
              >
                <Block row   center style={{height:55}}    >
                  <TextInput
                    placeholder={'Search'}
                    style={txtInputHome}
                  />
                  <Button style={btnSearch} >
                    <Icon
                      name={'search'}
                      size={20}
                      color={'white'}
                      style={{marginLeft:10}}
                    />
                  </Button>
                </Block>
                <FoodPopular navigationStack={this.props.navigationStack}   />
                <FoodNear navigationStack={this.props.navigationStack}    />
                <CollectionFood navigationStack={this.props.navigationStack}   />

             </ScrollView>
            
        );
    }
}
 
  