import React, { Component } from 'react';
import { View,TextInput,Image,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import {Block,Button,Text} from '../component/index';
import styles from '../style/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
import {connect}  from 'react-redux';
class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            data:this.props.foods,
            txtSearch:""
        }
    }
    
    renderStar(rating){
        let arrStar=[]
        for(let i=0;i<parseInt(rating);i++){
            arrStar.push(
                <Icon
                    style={{marginRight:5}}
                    key={`${i}`}
                    name={'star'}
                    color={colors.tertiary}
                    size={20}
                />
            )
        }
        return arrStar
}
    renderItemFoodNear(item){
        const  {imgFoodNear,containerItemSearch}=styles;
        return(
            <TouchableOpacity
            style={containerItemSearch}
            >
                    <Block   
                        row 
                        color={'white'}
                        
                    >
                        <Image
                            source={{uri:item.images[0]}}
                            style={imgFoodNear}
                            resizeMode={'cover'}
                            />
                        <Block space={'around'} >
                            <Text h3 >{item.name}</Text>
                            <Text gray numberOfLines={1} >{item.address}</Text>
                            <Block  flex={0.2} row center  space={'between'} >
                                <Block row >
                                    {this.renderStar(item.rating)}
                                </Block>
                                <Block>

                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </TouchableOpacity>
        )
    }



    render() {
        const  {btn,txtInput,fullBar}=styles;
        return (
              <Block flex={1} padding={[0,20]} >
                  <View  style={{height:100}}   >
                        <Block middle >
                         <Block padding={[10,0]} row  space={'between'} >
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.pop()}
                            >
                                <Icon
                                    name={'chevron-left'}
                                    size={25}
                                    color={colors.orange}
                                
                                />
                            </TouchableOpacity>
                            <Text orange h2 bold >Tìm kiếm</Text>
                            <Text  />
                        </Block>
                        </Block>
                      <Block
                         row
                         color={colors.gray4}
                         padding={[0,20]}
                         center
                         style={{
                             height:50,
                            borderRadius:10
                         }}
                   
                      >
                          <Icon
                            name={'search'}
                            size={16}
                            color={colors.gray}
                            style={{marginRight:10}}
                        />
                        <TextInput 
                            placeholder={'Search'}
                            autoFocus
                            onChangeText={(val)=>{
                                this.setState({
                                    data:this.props.foods.filter(e=>e.name.toLowerCase().includes(val)==true)
                                })
                            }}
                            style={{
                                paddingVertical:5,
                                flex:1,
                                height:50
                            }}
                        />
                      </Block>
                      <View  style={fullBar} />
                  </View>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    keyExtractor={(item)=>item._id}
                    renderItem={({item})=>this.renderItemFoodNear(item)}

                  />
              </Block>
            
        );
    }
}


const mapStateToProps=(state)=>{
    return {
      foods:state.foods
     
    }
  }
  
export default  connect(mapStateToProps)(Search);