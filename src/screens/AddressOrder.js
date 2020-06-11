import React, { Component } from 'react';
import {TextInput, View,Keyboard } from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';

class AddressOrder extends Component {
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
        const {hr1,btnTotal,rowBetween}=styles
        const {name,address,sdt}=this.props.user;
        const arrAddress=address.split(',');

        return (
            <Block color={'white'} >
                <View  style={hr1} />
                <Block padding={[10,20]} margin={[10,0]}  >
                    <Block row  space={'between'}  >
                    <Text bold h2 >{name}</Text>
                        <Text gray title >[Mặc định]</Text>
                    </Block>
                <Text title>{sdt}</Text>
                {arrAddress.map(e=><Text key={e} >{e}</Text>)}
               </Block>
               <View  style={hr1} />
                <Block padding={[0,20]}   >
                    <Button onPress={this.toggleModal.bind(this)} >
                        <Block center row  space={'between'}>
                            <Text h2  bold>Thêm địa chỉ mới</Text>
                            <Text h1 gray bold >+</Text>
                        </Block>
                    </Button>
                </Block>
               <View style={hr1} />
               <Modal 
                    isVisible={this.state.isModalVisible}
                    backdropColor="#B4B3DB"
                    backdropOpacity={0.8}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={800}
                    animationOutTiming={600}
               >
                    <Block color={'white'}  style={{borderRadius:10}}  >
                        <Block flex={1} >
                            <View  style={{paddingHorizontal:20}} >
                                <View style={rowBetween} >
                                    <Text title bold>Tên</Text>
                                    <TextInput placeholder={'Điền tên'}  />
                                </View>
                            </View>
                            <View style={hr1}  />
                            <View  style={{paddingHorizontal:20}} >
                                <View style={rowBetween} >
                                    <Text title bold>Số điện thoại</Text>
                                    <TextInput placeholder={'Điền số điện thoại'}  />
                                </View>
                            </View>
                            <View style={hr1}  />
                            <View  style={{paddingHorizontal:20}} >
                                <View style={rowBetween} >
                                    <Text title bold>Tỉnh/Thành phố</Text>
                                    <TextInput placeholder={'Điền Tỉnh/Thành phố'}  />
                                </View>
                            </View>
                            <View style={hr1}  />
                            <View  style={{paddingHorizontal:20}} >
                                <View style={rowBetween} >
                                    <Text title bold>Quận/Huyện</Text>
                                    <TextInput placeholder={'Điền Quận/Huyện'}  />
                                </View>
                            </View>
                            <View style={hr1}  />
                            <View  style={{paddingHorizontal:20}} >
                                <View style={rowBetween} >
                                    <Text title bold>Phường xã</Text>
                                    <TextInput placeholder={'Điền Phường xã'}  />
                                </View>
                            </View>
                            <View style={hr1}  />
                            <View  style={{paddingHorizontal:20}} >
                                <View style={{paddingTop:10}} >
                                    <Text title bold>Địa chỉ cụ thể</Text>
                                    <Text gray>Số nhà,tên tòa nhà,tên khu vực</Text>
                                    <TextInput placeholder={'Nhập địa chỉ cụ thể'}  />
                                </View>
                            </View>
                            <View style={hr1}  />
                            
                        </Block>
                        <View style={hr1}  />
                        <Button
                            color={'#FF8C00'}
                            style={[btnTotal,{marginHorizontal:20}]}
                            onPress={this.toggleModal.bind(this)} >
                            <Text white h2 >Hoàn Thành</Text>
                        </Button>
                    </Block>
                </Modal>

               
            </Block>
           
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(AddressOrder)