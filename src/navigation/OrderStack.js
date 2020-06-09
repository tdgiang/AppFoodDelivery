import  React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Order from '../screens/Order';
import ConfirmOrder from '../screens/ConfirmOrder';
import DeliveryProgress from '../screens/DeliveryProgress';
const Stack = createStackNavigator();
export default class OrderStack extends Component {
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
                <Stack.Navigator initialRouteName="Order">
                    <Stack.Screen 
                        name="Order" 
                        component={Order} 
                        options={this._settingOptionBack()}
                    />
                    <Stack.Screen 
                        name="ConfirmOrder" 
                        component={ConfirmOrder} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="DeliveryProgress" 
                        component={DeliveryProgress} 
                        options={this._settingOption()}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    }
}