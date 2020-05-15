import React, { Component } from 'react';
import { View,TextInput,ScrollView,Image  } from 'react-native';
import {Block,Button,Text} from '../component/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  img=require('../constants/images/login1.jpg');
import styles from '../style/styles';

export default class Home extends Component {
     
    render() {
      const  {txtInputHome,btnSearch,imgFoodPopular,itemFoodPopular,boxFree}=styles;
        return (
             <ScrollView style={{paddingHorizontal:10,flex:1}} >
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
                <Block  flex={1}       >
                    <Text h1 >Nổi bật </Text>
                    <View   style={itemFoodPopular} >
                        <Image
                          source={img}
                          style={imgFoodPopular}
                          resizeMode={'cover'}
                        />
                        <Text h3 >Name foood</Text>
                        <Text gray >adress</Text>
                        <Block  row center  space={'between'} >
                          <Icon
                            name={"star"}
                            color={colors.orange}
                          />

                          <Text  >4.6</Text>
                          <Text gray >(233 ratings)</Text>
                          <View   style={boxFree}  >
                              <Text white >Free delivery</Text>
                          </View>
                        </Block>
                    </View>

                </Block>

             </ScrollView>
            
        );
    }
}
 
  