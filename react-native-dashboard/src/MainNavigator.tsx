import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LanguageSwitcher from './components/LanguageSwitcher';

import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import SettingsScreen from './screens/SettingsScreen';

type TabIcon = {
    [routeName: string]: string;
}

const TabIcons: TabIcon = {
    "Home": "earth",
    "Account": "wallet",
    "Settings": "settings",
}

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    const { t } = useTranslation();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const iconName = TabIcons[route.name] + (focused ? '' : '-outline');
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                headerRight: () => <LanguageSwitcher />,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{title: t('common:home')}} />
            <Tab.Screen name="Account" component={AccountScreen} options={{title: t('common:account')}} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{title: t('common:settings')}} />
        </Tab.Navigator>
    );
}

export default MainNavigator;