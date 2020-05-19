import  React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import ForgotPassword from '../screens/ForgotPassword';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import VerifyPhone from '../screens/VerifyPhone';
import VerifyOTP from '../screens/VerifyOTP';
import tabNavigation from './tabNavigation';

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
                height:50,
                elevation:1
              }
            
        }
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="ForgotPassword" 
                        component={ForgotPassword} 
                        options={this._settingOptionBack()}
                    />
                    <Stack.Screen 
                        name="SignUp" 
                        component={SignUp} 
                        options={this._settingOptionBack()}
                    />
                     <Stack.Screen 
                        name="VerifyPhone" 
                        component={VerifyPhone} 
                        options={this._settingOption()}
                    />
                     <Stack.Screen 
                        name="VerifyOTP" 
                        component={VerifyOTP} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Welcome" 
                        component={Welcome} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="tabNavigation" 
                        component={tabNavigation} 
                        options={this._settingOption()}
                    />
                  
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    }
}