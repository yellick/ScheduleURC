import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AuthPage from './screens/AuthPage';
import SchedulePage from './screens/SchedulePage';
import ProfilePage from './screens/ProfilePage';
import ThemesPage from './screens/ThemesPage';
import SkippingPage from './screens/SkippingPage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Расписание">
      <Drawer.Screen name="Расписание" component={SchedulePage} />
      <Drawer.Screen name="Пропуски занятий" component={SkippingPage} />
      <Drawer.Screen name="Темы работ" component={ThemesPage} />
      <Drawer.Screen name="Профиль" component={ProfilePage} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthPage} />
        <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
