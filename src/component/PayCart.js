import React, { Component } from 'react';
import { View ,TextInput,StyleSheet,Image,Dimensions,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import {Block,Button,Text} from './index';
import { colors } from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width,height}=Dimensions.get('window');
const img=require('../constants/images/pay.png');

export default class PayCart extends Component {
    constructor(props){
        super(props);
        this.state={
            numCard:"",
            date:"",
            name:""
        }
    }
    render() {
        const {txtInput,boxInput,row}=styles;
        const {numCard,date,name}=this.state;
        return (
           
                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Block padding={10}  >
                    <Block flex={8}>
                    <Block flex={1} >
                        <Image
                                source={img}
                                style={{width:width-60,height:height/4-20}}
                                resizeMode={'cover'}
                        />
                    </Block>
                    <Block  flex={3} >
                            <View style={boxInput}   >
                                <Icon
                                    name={'credit-card'}
                                    size={25}

                                />
                                <TextInput
                                    style={txtInput}
                                    placeholder={"Số thẻ"}
                                    keyboardType={'number-pad'}
                                    value={numCard}
                                    onChangeText={(val)=>this.setState({numCard:val})}
                                />
                            </View>
                            <View style={boxInput}  >
                                <Icon
                                    name={'calendar'}
                                    size={25}

                                />
                                <TextInput
                                    style={txtInput}
                                    placeholder={"MM/YY"}
                                    keyboardType={'number-pad'}
                                    value={date}
                                    onChangeText={(val)=>this.setState({date:val})}

                                />
                            </View>
                            <View  style={row} >
                                <Icon
                                    name={'info-circle'}
                                    size={18}
                                    style={{marginRight:5}}

                                />
                                <Text>Ngày phát hành</Text>
                            </View>
                            <View style={boxInput} >
                                <Icon
                                    name={'user'}
                                    size={25}

                                />
                                <TextInput
                                    style={txtInput}
                                    placeholder={"Tên chủ thẻ(không dấu)"}
                                    value={name}
                                    onChangeText={(val)=>this.setState({name:val})}

                                />
                            </View>

                            <View  style={[row,{marginTop:30}]}  >
                                <Text  title>Điều kiện sử dụng dịch vụ</Text>
                                <Icon
                                    name={'question-circle-o'}
                                    style={{marginLeft:15}}
                                    size={30}
                                    color={colors.lightBlue1}
                                />

                            </View>

                        </Block>
                    </Block>
                    <Block flex={1} >
                        <Button 
                            onPress={()=>{
                                if(numCard && date && name )
                                    this.props.closeModal()
                                else
                                    alert("Bạn chưa điền đầy đủ thông tin!");
                            }
                            }
                            color={colors.lightBlue1}  >
                            <Text color={'white'} align={'center'}  h2>Hoàn thành</Text>
                        </Button>
                    </Block>
                </Block>
                </TouchableWithoutFeedback>
            
        );
    }
}

const styles=StyleSheet.create({
    txtInput:{
        paddingHorizontal:10,
        flex:1,
        height:50,
        paddingVertical:10,
        fontSize:16
        
    },
    boxInput:{
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        borderRadius:1,
        borderColor:colors.gray2,
        borderWidth:1,
        paddingHorizontal:10,
        borderRadius:5
    },
    row:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center'

    }
})