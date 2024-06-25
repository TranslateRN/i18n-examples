import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../Styles";
import { useTranslation } from "react-i18next";

interface StyledButtonProps {
	text: string;
	primary?: boolean;
	action?: boolean;
	onPress: () => void;
}

const StyledButton = ({ text, primary = true, action = true, onPress }: StyledButtonProps) => {
	const { t } = useTranslation();

	return (
		<Pressable
			style={({ pressed }) => [
				primary ? styles.primaryButton : styles.secondaryButton,
				{
					backgroundColor: primary ? colors.primary : 'white',
					opacity: pressed ? 0.7 : 1,
				},
			]}
			onPress={onPress}
		>
			<Text style={primary ? styles.primaryText : { ...styles.secondaryText, color: action ? colors.primary : colors.neutral }}>
				{t(text)}
			</Text>
		</Pressable>
	);
};

export default StyledButton;

const styles = StyleSheet.create({
	primaryButton: {
		width: "80%",
		maxWidth: 400,
		height: 60,
		borderRadius: 8,
		margin: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	primaryText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "700",
	},
	secondaryButton: {
		padding: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	secondaryText: {
		fontSize: 16,
		fontWeight: "700",
	},
});