import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const SettingsScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('common:settings')}</Text>
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:"center",
        justifyContent:"center"
    },
});