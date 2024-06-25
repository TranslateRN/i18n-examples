import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationProps } from '../AppNavigator'
import StyledButton from '../components/StyledButton';
import { useTranslation } from 'react-i18next';

const LoginScreen = ({navigation}: NavigationProps) => {
    const { t } = useTranslation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        // Login logic
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={t('common:username')}
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder={t('common:password')}
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            <StyledButton text='common:login' primary={true} onPress={() => navigation.navigate('MainNavigator')} />
            <StyledButton text='common:trydemo' primary={false} onPress={() => navigation.navigate('MainNavigator')} />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:"center",
        justifyContent:"center"
    },
    input: {
        width: "80%",
        maxWidth: 400,
        height: 60,
        borderRadius: 8,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#00BFFF",
        borderWidth: 1,
        padding: 10,
    },
  });