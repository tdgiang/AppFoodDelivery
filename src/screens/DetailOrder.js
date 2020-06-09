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
        return (
            <ScrollView  showsVerticalScrollIndicator={false}   >
                <View  style={hr1} />
                <Block padding={[10,20]} center >
                    <Text bold h2>Thông tin này đã chính xác ?</Text>
                </Block>
                <View  style={hr1} />
                <Block padding={[10,20]} margin={[10,0]}  >
                    <Block row  space={'between'}  >
                        <Text bold h3 >Địa chỉ nhận hàng</Text>
                        <TouchableOpacity>
                            <Text orange title >Nhấn để thay đổi</Text>
                        </TouchableOpacity>
                    </Block>
                    <Block row  space={'between'}  >
                        <Text title >Trần Đức Giang</Text>
                        <Text title>0866912436</Text>
                        
                    </Block>
                <Text >Số 69 Trâu quỳ</Text>
                <Text >Thị trấn trâu quỳ</Text>
                <Text >Huyện Gia Lâm</Text>
                <Text >TP.Hà Nội</Text>
               </Block>
               <View  style={hr1} />
                    <Block  padding={[10,20]}>
                        <Block row  space={'between'}   >
                            <Text bold h3 >Địa chỉ nhận hàng</Text>
                            <TouchableOpacity>
                                <Text orange title >Nhấn để thay đổi</Text>
                            </TouchableOpacity>
                        
                        </Block>
                        <Text>Thanh toán khi nhận hàng</Text>
                    </Block>
               <View style={hr1} />
               <Block   margin={[20,0,0,0]}>
               <View style={hr1} />
                    <Block padding={[10,20]} >
                        <Block row  space={'between'}   >
                            <Text bold h3 >Thành tiền</Text>
                            <TouchableOpacity>
                                <Text orange title bold >đ 1.321.000</Text>
                            </TouchableOpacity>
                        
                        </Block>
                    </Block>
                </Block>
                <View style={hr1} />
                <Block padding={[10,20]} center>
                    <Text bold h2 >Danh sách đơn hàng</Text>
                </Block>
                <View style={hr1} />
                <Block row padding={[10,20]} >
                    <Image style={imgFoodNear}  source={img} />
                    <Block  margin={[0,10]} space={'around'} >
                        <Text title >Trà sữa chân châu</Text>
                        <Text>đ 36.000</Text>
                        <Text>SL:1</Text>
                    </Block>
                </Block>
                <View style={hr1} />
                <Block row padding={[10,20]} >
                    <Image style={imgFoodNear}  source={img} />
                    <Block  margin={[0,10]} space={'around'} >
                        <Text title >Trà sữa chân châu</Text>
                        <Text>đ 36.000</Text>
                        <Text>SL:1</Text>
                    </Block>
                </Block>
                <View style={hr1} />
                <Block row padding={[10,20]} >
                    <Image style={imgFoodNear}  source={img} />
                    <Block  margin={[0,10]} space={'around'} >
                        <Text title >Trà sữa chân châu</Text>
                        <Text>đ 36.000</Text>
                        <Text>SL:1</Text>
                    </Block>
                </Block>
                <View style={hr1} />
                

                <Block margin={[20,0]} />
            </ScrollView>
           
        );
    }
}