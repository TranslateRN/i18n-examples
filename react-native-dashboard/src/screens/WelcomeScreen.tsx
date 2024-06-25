import React from 'react';
import { NavigationProps } from '../AppNavigator';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-web-swiper';
import WelcomePage from '../components/welcome/WelcomePage';
import StyledButton from '../components/StyledButton';
import colors from '../Styles';

/**
 * Welcome screen component that contains the navigation stack
 * where the user can navigate to the different screens by swiping left or right
 * and also by clicking the buttons on the bottom of the screen which shows the
 * progress of the user
 */
const WelcomeScreen = ({navigation }: NavigationProps) => {
    return (
        <View style={styles.container}>
            <Swiper
                from={0}
                minDistanceForAction={0.1}
                controlsProps={{
                    dotsTouchable: true,
                    nextPos: 'right',
                    prevPos: 'left',
                    nextTitle: '',
                    nextTitleStyle: { paddingHorizontal: 15, paddingVertical: 350 },
                    prevTitle: '',
                    prevTitleStyle: { paddingHorizontal: 15, paddingVertical: 350 },
                    dotActiveStyle: { backgroundColor: colors.primary },
                }}
            >
                <WelcomePage n={1} />
                <WelcomePage n={2} />
                <WelcomePage n={3} />
            </Swiper>
            <View style={styles.signContainer}>
                <StyledButton text='common:signup' primary={true} onPress={() => navigation.navigate('Signup')} />
                <StyledButton text='common:login' primary={false} onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
};

export default WelcomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    signContainer: {
        marginBottom: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
