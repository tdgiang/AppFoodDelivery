import  React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FoodDetail from '../screens/FoodDetail';
import Favorite from '../screens/Favorite';

const Stack = createStackNavigator();

export default class index extends Component {

    _settingOption(){
        return{
            title:"",
            headerStyle: {
                 elevation:0,
                 height:0,
                 opacity:0
              }
            
        }
    }
    _settingOptionBack(){
        return{
            title:"",
            headerStyle: {  
                 height:0,
              
              }
            
        }
    }

    render() {
        return (
            <NavigationContainer  independent={true} >
                <Stack.Navigator initialRouteName="Favorite">
                    <Stack.Screen 
                        name="Favorite" 
                        component={Favorite} 
                        options={this._settingOptionBack()}
                    />
                    <Stack.Screen 
                        name="FoodDetail" 
                        component={FoodDetail} 
                        options={this._settingOption()}
                    />
                    
                  
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    }
}