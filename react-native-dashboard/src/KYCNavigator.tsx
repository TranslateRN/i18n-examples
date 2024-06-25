import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import CountryScreen from './screens/kyc/CountryScreen';

const Stack = createStackNavigator();

const KYCNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator screenOptions={{ headerRight: () => <LanguageSwitcher /> }}>
      <Stack.Screen name="Country" component={CountryScreen} options={{ title: t('common:country') }} />
    </Stack.Navigator>
  );
};

export default KYCNavigator;
