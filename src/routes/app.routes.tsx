import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Message from '../pages/Message';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name="dasboard" component={Dashboard} />
    <App.Screen name="message" component={Message} />
  </App.Navigator>
);

export default AppRoutes;
