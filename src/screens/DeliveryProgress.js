import React, { Component } from 'react'
import {  View ,TouchableOpacity,ScrollView} from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
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

export default class DeliveryProgress extends Component {
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

  render () {
    const {footerDelivery,boxDelivery,btnTotal,hr1,borderDashed,bodyDelivery}=styles;
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
                  <Block row  >
                    <Block flex={4}  >
                        <Text title  >Chè trúc bạch</Text>

                    </Block>
                    <Block flex={1}  >
                      <Text title accent>1</Text>
                    </Block>
                    <Block  flex={2}  center >
                      <Text title >35000 đ</Text>

                    </Block>

                  </Block>
                  <Block row  >
                    <Block flex={4}  >
                        <Text title  >Chè trúc bạch</Text>

                    </Block>
                    <Block flex={1}  >
                      <Text title accent>1</Text>
                    </Block>
                    <Block  flex={2}  center >
                      <Text title >35000 đ</Text>

                    </Block>

                  </Block>
                  <Block row  >
                    <Block flex={4}  >
                        <Text title  >Chè trúc bạch</Text>

                    </Block>
                    <Block flex={1}  >
                      <Text title accent>1</Text>
                    </Block>
                    <Block  flex={2}   center >
                      <Text title   >35000 đ</Text>

                    </Block>
                </Block>
                </Block>
               
                <Block  row space={'between'} >
                  <Text title bold >Phí đồ ăn</Text>
                  <Text title   bold >120000 đ</Text>
                </Block>
                <Block  row space={'between'} >
                  <Text title bold >Phí dich vụ</Text>
                  <Text title   bold >40000 đ</Text>
                </Block>
                <Block  row space={'between'} >
                  <Text title bold >Tổng đơn hàng</Text>
                  <Text title accent  bold >160000 đ</Text>
                </Block>
                <View  style={hr1} />
                <Block  row  center>
                  <Icon
                    name={'hand-holding-usd'}
                    color={'#0AC4BA'}
                    size={20}
                    style={{marginHorizontal:10}}
                  />
                  <Text title  primary >Thanh toán khi lấy hàng</Text>
                </Block>
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
                onPress={()=>this.props.navigation.navigate('Order')}
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


 