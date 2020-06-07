import React, { Component } from 'react';
import { View,Image,TextInput,
    ScrollView ,StyleSheet,    
    TouchableOpacity,
    TouchableHighlight, 
} from 'react-native';
import {Block,Button,Text} from '../component/index';
import FavoriteItem from '../component/FavoriteItem';
import Header from '../component/Hearder';
import styles from '../style/styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import {connect}  from 'react-redux';
import {deleteFavorite} from '../redux/actionCreators';
class Favorite extends Component {

    renderItem(item,index){
        return(
            <FavoriteItem key={`${index}`} navigation={this.props.navigation} item={item} />
        )
        
    }
    renderHiddenItem = (item) => (
        <View style={styles.rowSwipeFavorite}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => {
                     this.props.deleteFavorite(item._id);
                }}
            >
                <Text white>Xóa</Text>
            </TouchableOpacity>
        </View>
    );



    render() {
        
        return (
            <Block flex={1}>
                <Header  nameTab={"My Favorite"} />

            
            <Block   padding={[10,10,0, 10]}  >
                <SwipeListView
                    data={this.props.favorites}
                    renderItem={({item,index})=>this.renderItem(item,index)}
                    renderHiddenItem={({item}) =>this.renderHiddenItem(item)}
                    rightOpenValue={-75}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    keyExtractor={item=>item._id}
                    showsVerticalScrollIndicator={false}
                />   
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

export default  connect(mapStateToProps,{deleteFavorite})(Favorite);

 