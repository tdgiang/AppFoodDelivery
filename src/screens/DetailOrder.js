import React, { Component } from 'react';
import {Image, View,TouchableOpacity,ScrollView} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
const img=require('../constants/images/collections/1590376056346-douong.jpg')
export default class DetailOrder extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalVisible:false
        }
    }
    toggleModal=()=>{
        this.setState({
            isModalVisible:!this.state.isModalVisible
        })
    }
    render() {
        const {hr1,btnTotal,imgFoodNear}=styles
       const {contact,dataOrder,payMethod}=this.props.bill;
       const arrAddress=contact.address.split(',');
        
        return (
            <ScrollView  showsVerticalScrollIndicator={false}   >
                <View  style={hr1} />
                <Block padding={[10,20]} center >
                    <Text bold h2>Thông tin này đã chính xác ?</Text>
                </Block>
                <View  style={hr1} />
                <Block padding={[10,20]} margin={[5,0]}  >
                    <Block row  space={'between'}  >
                        <Text bold h3 >Địa chỉ nhận hàng</Text>
                        <TouchableOpacity>
                            <Text orange title >Nhấn để thay đổi</Text>
                        </TouchableOpacity>
                    </Block>
                    <Block row  space={'between'}  >
                        <Text title >{contact.name}</Text>
                        <Text title>{contact.sdt}</Text>
                        
                    </Block>
                    {arrAddress.map(e=><Text key={e} >{e}</Text>)}
               </Block>
               <View  style={hr1} />
                    <Block  padding={[5,20]}>
                        <Block row  space={'between'}   >
                            <Text bold h3 >Hình thức thanh toán</Text>
                            <TouchableOpacity>
                                <Text orange title >Nhấn để thay đổi</Text>
                            </TouchableOpacity>
                        
                        </Block>
                        {payMethod?(<Text accent title>Thanh toán bằng thẻ</Text>):(<Text accent title>Thanh toán khi nhận hàng</Text>)}
                    </Block>
               <View style={hr1} />
               <Block   margin={[10,0,0,0]}>
               <View style={hr1} />
                    <Block padding={[5,20]} >
                        <Block row  space={'between'}   >
                            <Text bold h3 >Thành tiền:</Text>
                            <TouchableOpacity>
                                <Text orange title bold >đ {dataOrder.totalBill}</Text>
                            </TouchableOpacity>
                        </Block>
                    </Block>
                </Block>
                <View style={hr1} />
                <Block padding={[10,20]} center>
                    <Text bold h2 >Danh sách đơn hàng</Text>
                </Block>
                <View style={hr1} />
                {dataOrder.foodOrder.map(e=>(
                    <Block key={e._id} >
                        <Block row padding={[10,20]} >
                    <Image style={imgFoodNear}  source={{uri:e.images[0]}} />
                    <Block  margin={[0,10]} space={'around'} >
                        <Text title >{e.name}</Text>
                        <Text>đ {e.price}</Text>
                        <Text>SL:{e.count}</Text>
                    </Block>
                    </Block>
                    <View style={hr1} />
                    </Block>
                ))}
               
            </ScrollView>
           
        );
    }
}

