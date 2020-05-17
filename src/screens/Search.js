import React, { Component } from 'react';
import { View,TextInput,KeyboardAvoidingView,ScrollView  } from 'react-native';
import {Block,Button,Text} from '../component/index';

import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
export default class Search extends Component {
    
    renderItemFoodNear(){
        const  {imgFoodNear}=styles;
        return(
            <TouchableOpacity>
                    <Block   
                        row margin={[0,0]} 
                        padding={[15,0]} 
                        
                    >
                        <Image
                        source={img}
                            style={imgFoodNear}
                            resizeMode={'cover'}
                            />
                        <Block space={'around'} >
                            <Text h3 >Name foood</Text>
                            <Text gray >adress</Text>
                            <Block  flex={0.2} row center  space={'between'} >
                                <Rating  />
                            </Block>
                        </Block>
                    </Block>
                </TouchableOpacity>
        )
    }



    render() {
        const  {btn,txtInput,fullBar}=styles;
        return (
              <Block flex={1} padding={[0,20]} >
                  <View  style={{height:100}}   >
                      <Text h1 >Search</Text>
                      <Block

                         row
                         color={colors.gray2}
                         padding={[0,20]}
                         margin={[10,0]}
                         center
                         style={{
                             height:100,
                            borderRadius:10
                         }}
                   
                      >
                          <Icon
                            name={'search'}
                            size={16}
                            color={colors.gray}
                            style={{marginRight:10}}
                        />
                        <TextInput 
                            placeholder={'Search'}
                            style={{
                                paddingVertical:5,
                                flex:1
                            }}

                        />
                      

                      </Block>
                      <View  style={fullBar} />
                  </View>
                  <ScrollView
                        showsVerticalScrollIndicator={false}
                      >
                          {this.renderItemFoodNear()}
                          {this.renderItemFoodNear()}
                          {this.renderItemFoodNear()}
                          
                    </ScrollView>
              </Block>
            
        );
    }
}