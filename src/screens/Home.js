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
import DataFood from '../constants/data/DataFood';
import {connect} from 'react-redux';

import assects from '../constants/data/assects.js';

class Home extends Component {
     
     
    render() {
      const  {scrollStyle,txtInputHome,btnSearch}=styles;
        return (
             <ScrollView 
                style={scrollStyle}   
                showsVerticalScrollIndicator={false}
              >
                <Block row   center style={{height:55}}  margin={[10,0,0,0]}  >
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
                <FoodPopular popularFoods={DataFood.slice(0,4)} navigation={this.props.navigation}   />
                <FoodNear nearFoods={DataFood.slice(5,8)} navigation={this.props.navigation}    />
                <CollectionFood navigation={this.props.navigation}   />

                <Block>
                    {this.props.foods.slice(0,10).map(e=>{
                      return(
                        <View>
                          <Text>{e.img.slice(20).slice(0,e.img.slice(20).length-4)}</Text>
                          <Image 
                            style={{width:100,height:100}}
                            source={assects[e.img.slice(20).slice(0,e.img.slice(20).length-4)]}
                          />
                        </View>
                      )
                    }
                    )}
                    
                </Block>

             </ScrollView>
            
        );
    }
}
const mapStateToProps=(state)=>{
  return {
    foods:state.foods
  }
}

export default  connect(mapStateToProps)(Home);
 
  