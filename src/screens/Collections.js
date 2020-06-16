import React, { Component } from 'react';
import { View ,FlatList,TouchableOpacity} from 'react-native';
import {Block,Button,Text} from '../component/index';

import DataCollection from '../constants/data/DataCollection';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemCollection from '../component/ItemCollection';
import styles from '../style/styles';

import {connect}  from 'react-redux';

class Collections extends Component {
     
    render() {
        return (
            <View  style={{flex:1}} >
                <View style={styles.headerCollections}   >
                    <Block  flex={1} row space={'between'} center   padding={[0,20]} >
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.pop()}
                        >
                            <Icon
                                name={'arrow-left'}
                                size={20}
                                color={'black'}
                                
                            />
                        </TouchableOpacity>

                        <Text bold  h2>Collections</Text>
                        <View />


                    </Block>
                </View>
                <FlatList
                    style={{
                        paddingHorizontal:20,
                    }}
                    columnWrapperStyle={{
                        justifyContent:'space-between'
                    }}
                    keyExtractor={item=>item._id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={this.props.collections}
                    renderItem={({item,index})=><ItemCollection key={`${index}`}  index={index} navigation={this.props.navigation} item={item} />
                        
                    }
                />
            </View>
            
            
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        collections:state.collections
    }
}


export default connect(mapStateToProps)(Collections)