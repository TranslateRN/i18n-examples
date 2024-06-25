import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { CountryPicker } from '../../components/country-codes-picker';
import { NavigationProps } from '../../AppNavigator';
import StyledButton from '../../components/StyledButton';
import { useTranslation } from 'react-i18next';

const CountryScreen = ({ navigation }: NavigationProps) => {
    const { t, i18n } = useTranslation();
    type countryTranslations = { [key: string]: string }
    
    const [countryName, setCountryName] = useState<countryTranslations | null>(null);
    const [countryFlag, setCountryFlag] = useState('');
    const [show, setShow] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => setShow(true)}
                style={styles.selectButton}
            >
                <Text style={styles.selectButtonText}>{countryName ? `${countryName[i18n.language]} ${countryFlag}` : t("common:country")}</Text>
            </Pressable>
            <View style={styles.countryPickerContainer}>
                <CountryPicker
                    show={show}
                    lang={i18n.language}
                    onBackdropPress={() => setShow(false)}
                    style={{
                        modal: {
                            flex: 1,
                            marginTop: 300,
                            marginHorizontal: "auto"
                        },
                        itemsList: {
                            height: "60%"
                        },
                        textInput: {
                            height: 50,
                            fontSize: 16,
                            backgroundColor: 'lightgray',
                        },
                        countryButtonStyles: {
                            padding: 16,
                        },
                        searchMessageText: {
                            color: '#757575', // Material Design secondary text color
                            fontSize: 16,
                        },
                        flag: {
                            fontSize: 24,
                        },
                        dialCode: {
                            fontSize: 16,
                        },
                        countryName: {
                            fontSize: 16,
                        },
                    }}
                    pickerButtonOnPress={(item) => {
                        setCountryName(item.name);
                        setCountryFlag(item.flag);
                        setShow(false);
                    }}
                />
            </View>
            <StyledButton text='common:next' primary={true} onPress={() => navigation.navigate('Signup')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30,
    },
    selectButton: {
        width: '80%',
        maxWidth: 400,
        minHeight: 60,
        padding: 16,
        backgroundColor: '#2196F3', // Material Design primary color
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 2, // Add a Material Design elevation for a button-like appearance
    },
    selectButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    countryPickerContainer: {
        width: '80%',
        alignItems: "center",
        marginTop: 16,
    },
});

export default CountryScreen;
