import React from "react"
import { View, Image, StyleSheet } from "react-native"
import WelcomeTitle from "./WelcomeTitle"
import WelcomeText from "./WelcomeText"
import { useTranslation } from 'react-i18next';

const WelcomePage = ({ n }: { n: number }) => {
    const { t } = useTranslation('welcome');

    return (
        <View style={styles.container}>
            <WelcomeTitle title={t(`page${n}.title`)} />
            <WelcomeText text={t(`page${n}.text`)} />
            <Image source={require('../../../assets/welcome.jpg')} style={styles.containerImage} />
        </View>
    )
}

export default WelcomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    containerImage: {
        marginTop: 10,
        maxWidth: 400,
        width: "80%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
});