import  React,{Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Collections from '../screens/Collections';
import Welcome from '../screens/Welcome';
import Favorite from '../screens/Favorite';
import FoodDetail from '../screens/FoodDetail';
import ForgotPassword from '../screens/ForgotPassword';
//import Home from '../screens/Home';
import ListFoods from '../screens/ListFoods';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import CollectionDetail from '../screens/CollectionDetail';
import VerifyPhone from '../screens/VerifyPhone';
import VerifyOTP from '../screens/VerifyOTP';
import tabNavigation from './tabNavigation';
import EditProfile from '../screens/EditProfile';
 
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

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="EditProfile">
                    <Stack.Screen 
                        name="Collections" 
                        component={Collections}
                        
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Favorite" 
                        component={Favorite} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="FoodDetail" 
                        component={FoodDetail} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="ForgotPassword" 
                        component={ForgotPassword} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="Home" 
                        component={tabNavigation} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="SignUp" 
                        component={SignUp} 
                        options={this._settingOption()}
                    />
                     <Stack.Screen 
                        name="ListFoods" 
                        component={ListFoods} 
                        options={this._settingOption()}
                    />
                     <Stack.Screen 
                        name="CollectionDetail" 
                        component={CollectionDetail} 
                        options={this._settingOption()}
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
                        name="EditProfile" 
                        component={EditProfile} 
                        options={this._settingOption()}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    }
}