import  React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FoodDetail from '../screens/FoodDetail';
import NearFood from '../screens/NearFood';
import Collections from '../screens/Collections';
import CollectionDetail from '../screens/CollectionDetail';
import Search from '../screens/Search';
import Home from '../screens/Home';

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
            <NavigationContainer  independent={true} >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen 
                        name="Home" 
                        component={Home} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="FoodDetail" 
                        component={FoodDetail} 
                        options={this._settingOption()}
                    />
                    <Stack.Screen 
                        name="NearFood" 
                        component={NearFood}
                        options={this._settingOption()}
                    />
                     <Stack.Screen 
                        name="Collections" 
                        component={Collections} 
                        options={this._settingOption()}
                    />
                     <Stack.Screen 
                        name="CollectionDetail" 
                        component={CollectionDetail} 
                        options={this._settingOption()}
                    />
                     <Stack.Screen 
                        name="Search" 
                        component={Search} 
                        options={this._settingOption()}
                    />
                    
                  
                </Stack.Navigator>
            </NavigationContainer>
            
        );
    }
}