import React, { Component } from 'react';
import {TextInput, View,Keyboard} from 'react-native';
import {Block,Button,Text} from '../component/index';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddressOrder from './AddressOrder';
import DetailOrder from './DetailOrder';
import CheckBox from 'react-native-check-box'

var orange="#FF8C00"

export default class ConfirmOrder extends Component {
    constructor(props){
        super(props);
        this.state={
            isCartChecked:false,
        }
        
    }
     
    render() {
        const {stepBtn,hr1}=styles;
        return (
            <Block  color={'white'}>
                <ProgressSteps
                    activeStepIconBorderColor={orange}
                    completedProgressBarColor={orange}
                    completedStepIconColor={orange}
                    activeLabelColor={orange}
                    removeBtnRow={true}
                >
                    <ProgressStep 
                        label="Địa chỉ" 
                        nextBtnText={"Tiếp theo"}
                        nextBtnTextStyle={stepBtn}  
                    >
                        <AddressOrder  />
                    </ProgressStep>
                    <ProgressStep 
                        label="Thanh toán" 
                        nextBtnText={"Tiếp theo"}
                        previousBtnText={"Quay lại"}
                        nextBtnTextStyle={stepBtn} 
                        previousBtnTextStyle={stepBtn}
                    >
                        <Block >
                            <View style={hr1}/>
                            <Block  padding={[10,20]} >
                                <Text  bold h3>Lựa chọn hình thức than toán</Text>
                            </Block>
                            <View style={hr1}/>
                            <Block  padding={[10,20]} row  center >
                                <Icon
                                    name={'credit-card'}
                                    size={20}

                                />
                                <CheckBox
                                    checkedCheckBoxColor={'#FF8C00'}
                                    style={{flex: 1, padding: 10}}
                                    onClick={()=>{
                                      this.setState({
                                        isCartChecked:!this.state.isCartChecked,
                                      })
                                    }}
                                    isChecked={this.state.isCartChecked}
                                    leftText={"Thẻ tín dụng"}
                                    leftTextStyle={{fontSize:16}}
                                />
                            </Block>
                            <View style={hr1}/>
                            <Block  padding={[10,20]} row  center >
                                <Icon
                                    name={'hand-holding-usd'}
                                    size={20}

                                />
                                <CheckBox
                                    checkedCheckBoxColor={'#FF8C00'}
                                    style={{flex: 1, padding: 10}}
                                    onClick={()=>{
                                      this.setState({
                                        isCartChecked:!this.state.isCartChecked
                                      })
                                    }}
                                    isChecked={!this.state.isCartChecked}
                                    leftText={"Thanh toán khi nhận hàng"}
                                    leftTextStyle={{fontSize:16}}
                                />
                            </Block>
                            <View style={hr1}/>
                            
                        </Block>
                    </ProgressStep>
                    <ProgressStep 
                        label="Xác nhận"
                        finishBtnText={"Đặt hàng"}
                        previousBtnText={"Quay lại"}
                        nextBtnTextStyle={stepBtn} 
                        previousBtnTextStyle={stepBtn}
                        onSubmit={()=>this.props.navigation.navigate("DeliveryProgress")}
                    >
                        <DetailOrder   />
                    </ProgressStep>
                </ProgressSteps>
            </Block>
        );
    }
}