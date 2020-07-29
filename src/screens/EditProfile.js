import React, { Component } from 'react';
import { View,
    TextInput,
    Alert ,
    Dimensions,Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import {Block,Button,Text} from '../component/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
const  image=require('../constants/images/avatar.jpg');
import styles from '../style/styles';
import {editProfile}  from '../redux/action/actionUser';
import {connect}  from 'react-redux';
import ImagePicker from 'react-native-image-picker';
const {width,height}=Dimensions.get('window');
class EditProfile extends Component {
    constructor(props){
        super(props);
       const {name,phone,dateOfBirth,gender,img,address,userName}=this.props.route.params.user;
        this.state={
            name:name,
            phone:phone,
            gender:gender,
            dateOfBirth:dateOfBirth,
            address:address?address:"",
            img:image
        }
    }
 
    _pickImages(){
        ImagePicker.showImagePicker( (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
              
          
              this.setState({
                img: source,
              });
               
            }
          });
    } 

    render() {
      const  {containerProfile,txtInputProfile,boxAvatar,imgAvatar,boxIconPhoto}=styles;
        const {name,address,phone,gender,dateOfBirth,img}=this.state;
        const {userName}=this.props.route.params.user;
      return (
        <TouchableWithoutFeedback  onPress={()=>Keyboard.dismiss()}>
              <Block middle padding={[0,20]}  margin={[20,0]} >
                  
                    <View  style={containerProfile} >
                        <View  style={boxAvatar} >
                                <Image
                                    style={imgAvatar}
                                    source={img}
                                />
                                <TouchableOpacity
                                    style={boxIconPhoto}
                                    onPress={this._pickImages.bind(this)}
                                >
                                    <Icon
                                        name={"photo"}
                                        color={'white'}
                                        
                                        size={20}
                                    />
                                </TouchableOpacity>

                                
                            </View>
                            <View  style={{marginTop:80}} >
                                <TextInput
                                    style={txtInputProfile}
                                    value={name}
                                    onChangeText={(val)=>this.setState({name:val})}
                                    placeholder={"Tên"}
                                >
                                </TextInput>
                                <TextInput
                                    style={txtInputProfile}
                                    value={phone}
                                    onChangeText={(val)=>this.setState({phone:val})}
                                    placeholder={"Số điện thoại"}
                                />
                                <TextInput
                                    style={txtInputProfile}
                                    value={gender}
                                    onChangeText={(val)=>this.setState({gender:val})}
                                    placeholder={"male or female"}
                                />
                                <TextInput
                                    style={txtInputProfile}
                                    value={dateOfBirth}
                                    onChangeText={(val)=>this.setState({dateOfBirth:val})}
                                    placeholder={"Ngày sinh"}
                                />
                                <TextInput
                                    style={txtInputProfile}
                                    numberOfLines={2}
                                    value={address}
                                    onChangeText={(val)=>this.setState({address:val})}
                                    placeholder={"Địa chỉ"}
                                />
                            </View>
                    </View>
                    <View  style={{marginTop:20}} >
                                <Button  color={colors.red}
                                    onPress={()=>{
                                        this.props.editProfile({name,address,phone,gender,dateOfBirth,userName});
                                        Alert.alert("Thông báo!","Cập nhật thành công!");
                                    }}
                                >
                                    <Text h3 white  align={'center'} >Cập nhật</Text>
                                </Button>
                        </View>
                 
              </Block>
              </TouchableWithoutFeedback>    
        );
    }
}

export default  connect(null,{editProfile})(EditProfile)
 
  