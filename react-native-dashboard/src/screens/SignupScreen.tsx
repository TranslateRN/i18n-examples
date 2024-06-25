import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationProps } from '../AppNavigator';
import StyledButton from '../components/StyledButton';
import { useTranslation } from 'react-i18next';

const SignupScreen = ({ navigation }: NavigationProps) => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Implement your signup logic here
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={t('common:email')}
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                textContentType='emailAddress'
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput
                placeholder={t('common:username')}
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                textContentType='username'
                autoCapitalize='none'
            />
            <TextInput
                placeholder={t('common:password')}
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry={true}
                textContentType="password"
                autoCapitalize='none'
            />
            <StyledButton text='common:signup' primary={true} onPress={() => navigation.navigate('KYCNavigator')} />
            <StyledButton text='common:trydemo' primary={false} onPress={() => navigation.navigate('MainNavigator')} />
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "80%",
        maxWidth: 400,
        height: 60,
        borderBottomColor: "#00BFFF",
        borderBottomWidth: 1,
        margin: 10,
        padding: 10,
    },
});
