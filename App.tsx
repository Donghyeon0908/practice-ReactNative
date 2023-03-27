import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
        tabBarIcon: () => {
          let name = '';

          if (route.name === 'Main') {
            name = 'netflix';
          }
          if (route.name === 'Todo') {
            name = 'tinder';
          }

          return <Icon name={name} size={20} />;
        },
      })}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Todo" component={TodoScreen} />
    </Tab.Navigator>
  );
};

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTab} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
