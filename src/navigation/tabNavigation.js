import React, { Component } from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

 
import HomeStack from './HomeStack';
import OrderStack from './OrderStack';
import FavoriteStack from './FavoriteStack';
import ProfileStack from './ProfileStack';
import {colors} from '../constants/theme';
 


const Tab = createBottomTabNavigator();

function MyTabs( navigationStack) {
  return (
    <Tab.Navigator
        initialRouteName="HomeStack"
        tabBarOptions={{
        activeTintColor: colors.orange,
        }}
    
    >
      <Tab.Screen 
        name="HomeStack"
        component={ HomeStack}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
      
      />
      <Tab.Screen 
        name="Order" 
        component={OrderStack} 
        options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <Icon name="list-alt" color={color} size={size} />
            ),
          }}
      
      />
      <Tab.Screen 
        name="FavoriteStack" 
        component={FavoriteStack} 
        options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size }) => (
              <Icon name="bookmark" color={color} size={size} />
            ),
          }}
      
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStack} 
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