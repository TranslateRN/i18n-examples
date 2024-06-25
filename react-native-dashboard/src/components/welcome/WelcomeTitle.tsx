import React from 'react';
import { Text, StyleSheet } from 'react-native'

interface WelcomeTitleProps {
    title: string;
}

const WelcomeTitle = ({title}: WelcomeTitleProps) => {
    return (
        <Text style={styles.title}>{title}</Text>   
    );
}

export default WelcomeTitle;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
