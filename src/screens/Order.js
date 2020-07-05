import React, { Component } from 'react';
import { View ,TouchableOpacity,Alert } from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Header from '../component/Hearder';
import {deleteOrder,increFoodOrder,decreFoodOrder} from '../redux/actionCreators';
import {addOrderInBill}  from '../redux/action/actionBill';
import { SwipeListView } from 'react-native-swipe-list-view';
import {connect}  from 'react-redux';
class Order extends Component {
    constructor(props){
        super(props);
    }
    
    totalFood(){
        let total=0;
        this.props.orders.map(e=>{
            total+=e.price*e.count;
        })
        return total;
    }
    totalDeliver(){
        let total=0;
        this.props.orders.map(e=>{
            total+=(e.range<5?0:e.range*1000)
        })
        
        return total;
    }


    renderItem(item){
        const {rowBetween,itemOrder}=styles; 
        return(
            <View  style={itemOrder}>
                    <Block flex={3} padding={[0,10]}  >
                        <Text numberOfLines={1} title bold>{item.name}</Text>
                        <Text numberOfLines={1} gray1 >{item.nameStore}</Text>
                        <Text gray1 numberOfLines={1} >{item.address}</Text>
                    </Block>
                    <Block flex={1} padding={[0,10]}   >
                        <View style={rowBetween}>
                                <TouchableOpacity
                                    onPress={()=>this.props.increFoodOrder(item._id)}
                                >
                                    <Text  h2 >+</Text>
                                </TouchableOpacity>
                                <Text h3 style={{marginHorizontal:15}} >{item.count}</Text>
                                <TouchableOpacity
                                    onPress={()=>{
                                        if(item.count==1)
                                        {
                                            Alert.alert(
                                                "Thông báo!",
                                                `Bạn có chắc chắn muốn xóa ${item.name} khỏi giỏ hàng không?`,
                                                [
                                                  { 
                                                    text: "OK",
                                                    onPress: () => this.props.deleteOrder(item._id) ,
                                                    style:'destructive'
                                                },
                                                {
                                                    text: "Cancel",
                                                    style: 'cancel'
                                                  }
                                                ],
                                                { cancelable: false }
                                              )
                                        }else
                                            this.props.decreFoodOrder(item._id)
                                    }}
                                >
                                    <Text bold h2 >-</Text>
                                </TouchableOpacity>
                        </View>
                        <Text gray1 >Giá :{item.price}</Text>
                        <Text gray1 >Ship :{item.range<5?0:item.range*1000}</Text>
                    </Block>
            </View>
        )
    }
    
    renderHiddenItem = (item) => (
        <View style={styles.rowSwipeOrder}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => Alert.alert(
                    "Thông báo!",
                    `Bạn có chắc chắn muốn xóa ${item.name} khỏi giỏ hàng không?`,
                    [
                      { 
                        text: "OK",
                        onPress: () => this.props.deleteOrder(item._id) ,
                        style:'destructive'
                    },
                    {
                        text: "Cancel",
                        style: 'cancel'
                      }
                    ],
                    { cancelable: false }
                  )
                }
            >
                <Text white>Xóa</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        const {boxTotal,containerOrder,btnTotal}=styles
        return (
            <Block    >
                <Header nameTab={"Giỏ hàng"} />
                <Block  flex={3}  padding={[10,10]}>
                    <View  style={containerOrder}>
                        <SwipeListView
                            data={this.props.orders}
                            renderItem={({item})=>this.renderItem(item)}
                            renderHiddenItem={({item}) =>this.renderHiddenItem(item)}
                            rightOpenValue={-75}
                            previewRowKey={'0'}
                            previewOpenValue={-40}
                            keyExtractor={item=>item._id}
                            previewOpenDelay={3000}
                            showsVerticalScrollIndicator={false}
                        />   
                    </View>
                   

                </Block>
                <Block  flex={1}   padding={[0,20]} color={'white'} >
                    <Block  padding={[5,0]} style={boxTotal} >
                        <Block row   space={'between'} >
                            <Text title >Tổng tiền đồ ăn:</Text>
                            <Text title >{this.totalFood()}</Text>
                        </Block>
                        <Block  row  space={'between'}>
                            <Text  title>Phí vẫn chuyển:</Text>
                            <Text title >{this.totalDeliver()}</Text>
                        </Block>
                    </Block>
                    <Button  
                        color={'orange'} 
                        style={btnTotal}  
                        onPress={()=>{
                            if(this.props.orders.length==0){
                                Alert.alert("Thông báo!","Đơn hàng của bạn không tồn tại món nào. Vui lòng chọn món để tiếp tục!")
                            }else{
                                this.props.addOrderInBill(this.props.addOrderInBill({foodOrder:this.props.orders,totalBill:this.totalFood()+this.totalDeliver()}))
                                this.props.navigation.navigate("ConfirmOrder")
                            }
                           
                        }
                        }
                    >
                        <Block />
                        <Block center>
                            <Text  white h3>Tiếp tục</Text>
                        </Block>
                        <Block center >
                            <Text white title >đ {this.totalFood()+this.totalDeliver()}</Text>
                        </Block>
                    </Button>
                </Block>
            </Block>
            
        );
    }
}

const mapStateToProp=(state)=>{
    return{
        orders:state.orders
    }
}

export default connect(mapStateToProp,{deleteOrder,increFoodOrder,decreFoodOrder,addOrderInBill})(Order);