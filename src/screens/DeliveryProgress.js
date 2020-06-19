import React, { Component } from 'react'
import {  View ,TouchableOpacity,ScrollView,Alert} from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import {connect}  from 'react-redux';
import {clearOrder} from '../redux/actionCreators';
import {completedBill}  from '../saga/api';
const secondIndicatorStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 16,
  currentStepIndicatorLabelFontSize: 16,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 14,
  currentStepLabelColor: '#fe7013'
}

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
  const iconConfig = {
    name: 'feed',
    color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
    size: 18
  }
  switch (position) {
    case 0: {
      iconConfig.name = 'shopping-cart'
      break
    }
    case 1: {
      iconConfig.name = 'eye'
      break
    }
    case 2: {
      iconConfig.name = 'shipping-fast'
      break
    }
    case 3: {
      iconConfig.name = 'hand-holding-heart'
      break
    }
    default: {
      break
    }
  }
  return iconConfig
}

 class DeliveryProgress extends Component {
  constructor () {
    super()
    this.state = {
      currentPage: 1
    }
  }
  renderLabel = ({ position, stepStatus, label, currentPosition }) => {
    const {stepLabel,stepLabelSelected}=styles;
    return (
      <Text
        style={
          position === currentPosition
            ? stepLabelSelected
            : stepLabel
        }
      >
        {label}
      </Text>
    )
  }
  renderStepIndicator = params => (
    <Icon {...getStepIndicatorIconConfig(params)} />
  )

  onStepPress = position => {
    this.setState({ currentPage: position })
  }

  renderViewPagerPage = data => {
    return (
      <View style={styles.page}>
        <Text>{data}</Text>
      </View>
    )
  }
  renderPayMethod=(payMethod)=>{
    if(payMethod){
      return(
        <Block  row  center>
                  <Icon
                    name={'credit-card'}
                    color={'#0AC4BA'}
                    size={20}
                    style={{marginHorizontal:10}}
                  />
                  <Text title  primary >Đã thanh toán bằng thẻ</Text>
                </Block>
      )
    }else{
      return(
        <Block  row  center>
                  <Icon
                    name={'hand-holding-usd'}
                    color={'#0AC4BA'}
                    size={20}
                    style={{marginHorizontal:10}}
                  />
                  <Text title  primary >Thanh toán khi  lấy hàng</Text>
                </Block>

      )
    }
  }

  totalFood(){
    let total=0;
    this.props.bill.dataOrder.foodOrder.map(e=>{
        total+=e.price*e.count;
    })
    return total;
}
  totalDeliver(){
      let total=0;
      this.props.bill.dataOrder.foodOrder.map(e=>{
          total+=e.range*1000
      })
      
      return total;
  }

  render () {
    const {footerDelivery,boxDelivery,btnTotal,hr1,borderDashed,bodyDelivery}=styles;
    
    console.log(this.props.bill);
    const {dataOrder,payMethod}=this.props.bill
    return (
      <Block flex={1}>
        <View style={{margin:10}}  >
          <StepIndicator
            renderStepIndicator={this.renderStepIndicator}
            customStyles={secondIndicatorStyles}
            currentPosition={this.state.currentPage}
            onPress={this.onStepPress}
            stepCount={4}
            labels={[
              'Đơn hàng',
              'Xác nhận',
              'Giao hàng',
              'Nhận hàng',
            ]}
          />
        </View>
        <Block  flex={1}    >
          <ScrollView  >
            <Block   style={bodyDelivery}   padding={[10,5]} margin={[20,20]} color={'white'} >
                <Text bold h3 >Chi tiết đơn hàng</Text>
                <View  style={hr1} />
                <Block style={borderDashed} >
                  <Block row  >
                    <Block flex={4}  >
                        <Text title bold >#Tên món</Text>

                    </Block>
                    <Block flex={1}  >
                      <Text title bold>SL</Text>
                    </Block>
                    <Block  flex={2}  center >
                      <Text title bold   >Thành tiền</Text>

                    </Block>
                  </Block>
                    {dataOrder.foodOrder.map(e=>(
                      <Block row  key={e._id} >
                        <Block flex={4}  >
                            <Text title  >{e.name}</Text>
    
                        </Block>
                        <Block flex={1}  >
                          <Text title accent>{e.count}</Text>
                        </Block>
                        <Block  flex={2}  center >
                          <Text title >{e.count*e.price}</Text>
    
                        </Block>
                    </Block>
                  )
                  )}
                </Block>  
               
                 <Block  row space={'between'} >
                  <Text title bold >Phí đồ ăn</Text>
                  <Text title   bold >{this.totalFood()} đ</Text>
                </Block>
                <Block  row space={'between'} >
                  <Text title bold >Phí dich vụ</Text>
                  <Text title   bold >{this.totalDeliver()}đ</Text>
                </Block>
                <Block  row space={'between'} >
                  <Text title bold >Tổng đơn hàng</Text>
                  <Text title accent  bold >{dataOrder.totalBill} đ</Text>
                </Block>
                <View  style={hr1} />
                  {this.renderPayMethod(payMethod)}  
              </Block> 
          </ScrollView>

          <View  style={footerDelivery} >
            <Block flex={1} row space={'between'}  >
            <TouchableOpacity style={{flex:1}} >
                <Block center middle style={boxDelivery} >
               
                  <Icon
                    name={'phone'}
                    color={'white'}
                    size={20}
                  />
                    <Text white  >Điện thoại</Text>
                  
                </Block>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}} >
                  <Block  center middle  style={boxDelivery} >
                    <Icon
                        name={'rocketchat'}
                        color={'white'}
                        size={20}
                      />
                      <Text white  >Chat</Text>
                  </Block>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}} >
                  <Block center middle style={boxDelivery}  > 
                      <Icon
                          name={'window-close'}
                          color={'white'}
                          size={20}
                        />
                      <Text white  >Hủy</Text>
                  </Block>
                </TouchableOpacity>
            </Block>
            <Block flex={1} padding={[0,20]} >
              <Button 
                style={btnTotal}
                onPress={async ()=>{
                  let result=await completedBill(this.props.bill.idServer);
                  if(result){
                    Alert.alert("Thông báo!","Hoàn thành đơn hàng.Chúc quý khách ngon miệng!")
                    this.props.clearOrder();
                    this.props.navigation.navigate('Order');
                   
                  }
                  else{
                    Alert.alert("Thông báo!","Đơn hàng chưa thể hoàn thành trong lúc này!")
                  }
                  
                }}
              >
                  <Text  h3   white>Đã nhận hàng</Text>
              </Button>
            </Block>
          </View>
        </Block>
      </Block>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    bill:state.bill
  }
}

export default connect(mapStateToProps,{clearOrder})(DeliveryProgress)

 