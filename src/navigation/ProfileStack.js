import  React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EditProfile  from '../screens/EditProfile';
import Profile from '../screens/Profile';
import History  from '../screens/history';
const Stack = createStackNavigator();

export default class ProfileStack extends Component {

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
                <Stack.Navigator initialRouteName="Profile">
                    <Stack.Screen 
                        name="Profile" 
                        component={Profile} 
                        options={this._settingOptionBack()}
                    />
                    <Stack.Screen 
                        name="EditProfile" 
                        component={EditProfile} 
                        options={{ title: 'Chỉnh sửa hồ sơ' }}
                    />
                    <Stack.Screen 
                        name="History" 
                        component={History} 
                        options={{ title: 'Lịch sử đặt hàng' }}
                    />
                    
                  
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    }
}