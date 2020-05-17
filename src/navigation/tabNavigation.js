import React, { Component } from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

 
import Home from '../screens/Home';
import Order from '../screens/Order';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
 
const orange="#e68a00";


const Tab = createBottomTabNavigator();

function MyTabs( navigationStack) {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
        activeTintColor: orange,
        }}
    
    >
      <Tab.Screen 
        name="Home"
        component={ ()=> <Home navigationStack={navigationStack} />}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
      
      />
      <Tab.Screen 
        name="Order" 
        component={Order} 
        options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <Icon name="list-alt" color={color} size={size} />
            ),
          }}
      
      />
      <Tab.Screen 
        name="Favorite" 
        component={Favorite} 
        options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
              <Icon name="bookmark" color={color} size={size} />
            ),
          }}
      
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
      
      />
    </Tab.Navigator>
  );
}


export default class tabNavigation extends Component {
    state = {  }
    render() {
        return (
            <NavigationContainer  independent={true} >
                <MyTabs navigationStack={this.props.navigation} />
          </NavigationContainer>
        );
    }
}