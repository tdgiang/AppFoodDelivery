import React, { Component } from 'react';
import { View,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
    FlatList,
    Animated,
    Alert
} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {loginSucceeded}  from '../redux/action/actionUser';
import {loginFromAPI}  from '../saga/api';
import {connect}  from 'react-redux';

const {width,height}=Dimensions.get('window');
const data=[
    {
        id:'1',
        img:require('../constants/images/login2.jpg'),

    },
    {
        id:'2',
        img:require('../constants/images/login03.png'),
    },
    {
        id:'3',
        img:require('../constants/images/login04.jpg'),
    },
    {
        id:'4',
        img:require('../constants/images/login1.jpg'),
    }
];

 class Login extends Component {
    constructor(props){
        super(props);
        this.viewabilityConfig = {
            minimumViewTime:100,
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        }
        this.myRef = React.createRef();
        this.state={
            index : 0,
            userName:"",
            pass:""
        }
    }

    componentDidMount(){
        this.startAutoSlide()
    }
    startAutoSlide(){
        setInterval(()=>this.changeIndex(),3000)
    }
    changeIndex=()=>{
        this.setState({
            index:(this.state.index+1)%4
        },()=>{
           this.myRef.current.scrollToIndex({
                index:this.state.index,
                animated: true,
              }
           )
        })
    }
    renderViewDot=()=>(
        <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                colors={['rgba(256, 256, 256, 0)', 'rgba(0, 0, 0, 0.5)']}
                style={{flex:1}}
        >  
                <Block flex={1} row center middle >
                    {data.map((val,i)=>{
                         let opacity=(i==this.state.index?1:0.3);
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: 'white', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}
                </Block> 
            </LinearGradient>        
    )

    renderItem=(item)=>(
            <ImageBackground key={item.id}
                resizeMode={'cover'}
                source={item.img}
                style={styles.imgStyle}
            >
                 <TouchableOpacity
                                    onPress={()=>this.props.navigation.pop()}
                                >
                                    <Icon
                                        name={'arrow-left'}
                                        size={20}
                                        color={'white'}
                                        style={{margin:20}}
                                />
                </TouchableOpacity>
            </ImageBackground>
        )
    
    render() {
        const {body,txtInput,btn,slideLogin}=styles;
        const {userName,pass}=this.state;
        return (
        
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <Block flex={1} >
                        <View  style={slideLogin}  >
                            <FlatList
                               ref={this.myRef}
                                data={data}
                                style={{zIndex:0}}
                                viewabilityConfig={this.viewabilityConfig}
                                horizontal
                                pagingEnabled
                                scrollEnabled
                                decelerationRate={"fast"}
                                snapToAlignment="center"
                                decelerationRate={0}
                                scrollEventThrottle={16}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item})=>this.renderItem(item)}
                            />  
                            <View  style={{height:50,position:'absolute',bottom:10,width}} >
                                {this.renderViewDot()}
                            </View>
                        </View>
                        <Block  
                            style={body} 
                            flex={1} margin={[-15,0,0,0]}
                            color={'white'}
                        >
                                <Block flex={2}  middle center  >
                                    <Text big >Welcome back</Text>
                                    <Text  gray title  >Login to your account</Text>
                                </Block>
                                <Block flex={4}   space={'between'} padding={[0,30]}  >
                                    <TextInput
                                        style={txtInput}
                                        placeholder={'Tài khoản'}
                                        onChangeText={(val)=>this.setState({userName:val})}
                                    />
                                    <TextInput
                                        style={txtInput}
                                        placeholder={'Mật khẩu'}
                                        onChangeText={(val)=>this.setState({pass:val})}
                                        secureTextEntry={true}
                                    />
                                    <Button style={btn}  color={'orange'}
                                        onPress={()=> {
                                            if(userName && pass){
                                                try {
                                                    loginFromAPI({userName,pass})
                                                    .then(resJson=>{
                                                        if(resJson.user)
                                                        {
                                                            this.props.loginSucceeded(resJson.user)
                                                            this.props.navigation.replace("tabNavigation")
                                                        }
                                                        else
                                                            Alert.alert("Thông báo!","Đăng nhập thất bại!");
                                                    })
                                                } catch (error) {
                                                    Alert.alert("Thông báo!","Đăng nhập thất bại!");
                                                }
                                            }else
                                                Alert.alert("Thông báo!","Mời bạn điền đầy đủ thông tin");
                                    }}

                                    >
                                        <Text title white >Login</Text>
                                    </Button>
                                    <TouchableOpacity
                                        onPress={()=>this.props.navigation.navigate("ForgotPassword")}
                                    >
                                        <Text  align={'center'} >Quên mật khẩu?</Text>
                                    </TouchableOpacity>

                                </Block>
                                <Block flex={1}  middle  center  row  >
                                    <Text title >Đăng kí tài khoản? </Text>
                                    <TouchableOpacity
                                        onPress={()=>this.props.navigation.navigate("SignUp")}
                                    >
                                        <Text  title  color={'orange'}  >Sign up</Text>
                                    </TouchableOpacity>
                                </Block>
                        </Block>
                    </Block>
                </TouchableWithoutFeedback>
        );
    }
}

export default connect(null,{loginSucceeded})(Login);

