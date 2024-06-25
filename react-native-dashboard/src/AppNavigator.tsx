import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

import MainNavigator from './MainNavigator';
import KYCNavigator from './KYCNavigator';

export type StackNavigationParams = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  MainNavigator: undefined;
  KYCNavigator: undefined;

  Account: undefined;
};

export interface NavigationProps {
  navigation: StackNavigationProp<StackNavigationParams>;
}

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerRight: () => <LanguageSwitcher />}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: t('common:welcome')}} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{title: t('common:signup')}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{title: t('common:login')}} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="KYCNavigator" component={KYCNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
