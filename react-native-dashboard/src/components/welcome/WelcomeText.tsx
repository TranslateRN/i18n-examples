import React from 'react';
import { Text, StyleSheet } from 'react-native'

interface WelcomeTextProps {
    text: string;
}

const WelcomeText = ({text}: WelcomeTextProps) => {
    return (
        <Text style={styles.text}>{text}</Text>   
    );
}

export default WelcomeText;

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
    },
});
