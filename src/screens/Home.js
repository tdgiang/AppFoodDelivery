import React, { Component } from 'react';
import { TextInput,ScrollView  } from 'react-native';
import {Block,Button} from '../component/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/styles';
import FoodPopular from '../component/FoodPopular';
import FoodNear from '../component/FoodNear';
import CollectionFood from '../component/CollectionFood';
import {connect} from 'react-redux';


class Home extends Component {
    
  constructor(props){
    super(props);
    this.state={
      popularFoods:this.props.foods.filter(e=>e.popular),
      nearFood:this.props.foods.filter(e=>e.range<5)
    }
  }
  
    render() {
      const  {scrollStyle,txtInputHome,btnSearch}=styles;
      const {popularFoods,nearFood}=this.state;
        return (
             <ScrollView 
                style={scrollStyle}   
                showsVerticalScrollIndicator={false}
              >
                <Block row   center style={{height:55}}  margin={[10,0,0,0]}  >
                  <TextInput
                    onFocus={()=>this.props.navigation.navigate('Search')}
                    placeholder={'Search'}
                    style={txtInputHome}
                  />
                  <Button style={btnSearch} >
                    <Icon
                      name={'search'}
                      size={20}
                      color={'white'}
                      style={{marginLeft:10}}
                    />
                  </Button>
                </Block>
                <FoodPopular popularFoods={popularFoods} navigation={this.props.navigation}   />
                <FoodNear nearFoods={nearFood.slice(0,3)} navigation={this.props.navigation}    />
                <CollectionFood navigation={this.props.navigation}  />
             </ScrollView>
            
        );
    }
}
const mapStateToProps=(state)=>{
  return {
    foods:state.foods
   
  }
}

export default  connect(mapStateToProps)(Home);
 
  