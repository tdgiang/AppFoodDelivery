import React, { Component } from 'react';
import { ImageBackground,TouchableOpacity } from 'react-native';
import {Block,Button,Text} from './index';
import styles from '../style/styles';
import LinearGradient from 'react-native-linear-gradient';
import assects from '../constants/data/assects';

export default class ItemCollection extends Component {
     render() {
            const  {itemCollection}=styles;
            
            const {name,kids,_id,children}=this.props.item;
            return (
                <TouchableOpacity
                key={_id}
                    style={[itemCollection]}
                    onPress={()=>this.props.navigation.navigate("CollectionDetail",{listFoods:children,id:_id})}
                >
                    <ImageBackground
                        style={itemCollection}
                        source={assects[_id]}
                        resizeMode={'cover'}
                    >
                        <Block flex={1} />
                        <LinearGradient 
                                start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                                colors={['rgba(256, 256, 256, 0)', 'rgba(0, 0, 0, 0.8)']}
                                style={{flex:1,justifyContent:'center'}}
                        >  
                            <Text white  align={'center'} h3 >{name}</Text>
                            <Text white  align={'center'} h3 >{`${kids.length} món`}</Text>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>
                
            );
     }
 }