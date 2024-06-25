import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text>{t('common:home')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:"center",
        justifyContent:"center"
    },
});

export default HomeScreen;
