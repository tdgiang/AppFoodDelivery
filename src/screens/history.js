import React, { Component } from 'react';
import { View ,FlatList} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import {connect}  from 'react-redux';
class history extends Component {
    renderItem(item,index){
        let temp=new Date(item.create)
        return(
            <Block key={`${index}`} padding={[10,10]}  margin={[10,10]} color={'white'} 
                style={styles.boxHistory}
            >
                <Block row space={'between'} padding={[2,0]} >
                    <Text  title>Thời gian:</Text>
                    <Text accent title >{`${temp.getHours()}h:${temp.getMinutes()} ${temp.getDate()}/${temp.getMonth()}`}</Text>
                </Block>
                <Block row space={'between'} padding={[2,0]}>
                    <Text  title>Tổng tiền:</Text>
                    <Text accent title >{item.dataOrder.totalBill} VND</Text>
                </Block>
                <Block row space={'between'} padding={[2,0]} >
                    <Text  title>Thanh toán:</Text>
                    <Text accent title >{item.payMethod==true?"Thẻ":"Tiền mặt"}</Text>
                </Block>
            </Block>
        )
    }

    render() {
        return (
            <Block   >
                <FlatList
                    data={this.props.history}
                    renderItem={({index,item})=>this.renderItem(item,index)}
                    keyExtractor={(item,index)=>`${index}`}
                />
            </Block>
            
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        history:state.history
    }
}

export default connect(mapStateToProps)(history);