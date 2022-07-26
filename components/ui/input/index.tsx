import {FC} from "react";
import {View, Text, TextInput, TextInputProps} from "react-native";

import {InputType} from "../../../utils/enums/input";

import styles from './input.styles';
import {ObjWithKeys} from "../../../utils/types/common";

type InputProps = {
	label: string;
	type?: InputType;
	style?: ObjWithKeys<string | number>;
	inputProps?: TextInputProps;
	error?: string;
}

const defaultTextInputProps: TextInputProps = {
	keyboardType: InputType.text,
	maxLength: 48,
	defaultValue: '',
	autoComplete: "off",
	autoCorrect: false,
	autoFocus: false
}

const Input: FC<InputProps> = ({label, error, type = InputType.text, style, inputProps}) => {
	const textInputProps: TextInputProps = {
		...defaultTextInputProps,
		...inputProps,
		keyboardType: type
	};
	
	const textInputStyles = [
		styles.input,
		textInputProps.multiline && styles.inputMultiline,
		...(error ? [styles.error] : [])
	];
	
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={textInputStyles} {...textInputProps} />
			<Text style={styles.errorText}>{error}</Text>
		</View>
	)
};

export default Input;