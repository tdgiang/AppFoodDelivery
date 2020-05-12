import React, { Component } from 'react';
import { 
    View,
 } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Block,Button,Text} from '../component/index';

 export default class index extends Component {
      
     render() {
         return (
             <Block  padding={[20,20]} >

             
                <Block  flex={1} color={'red'} >

                
                    <Text>Index</Text>
                    <Icon
                        name={"heartbeat"}
                        size={30}
                        color={'red'}
                    />
                </Block>

                <Block>
                    <Text h2 bold >Hello</Text>
                </Block>
            </Block>
             
         );
     }
 }