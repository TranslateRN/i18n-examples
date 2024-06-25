import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (newLanguage: string) => {
    if (newLanguage !== i18n.language) {
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <View style={styles.languageSwitcher}>
      <MaterialIcons name="language" style={styles.icon} />
      <Picker
        style={{ width: 75, height: 32, marginRight: 10}} 
        itemStyle={{ height: 32, fontSize: 12 }}
        selectedValue={i18n.language}
        onValueChange={(itemValue: string) => toggleLanguage(itemValue)}
      >
        <Picker.Item label="EN" value="en" />
        <Picker.Item label="FR" value="fr" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  languageSwitcher: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#00BFFF',
  },
});

export default LanguageSwitcher;
