import {FC} from "react";
import {Pressable, Text, View} from "react-native";

import {ButtonMode} from "../../../../utils/enums/button";

import styles from './button.styles';
import {ObjWithKeys} from "../../../../utils/types/common";

export type ButtonProps = {
	onPress: () => void;
	title: string;
	view: ButtonMode;
	style?: ObjWithKeys<string | number>;
}
const Button: FC<ButtonProps> = ({onPress, title, view, style}) => {
	const buttonTextStyleQuery = view === ButtonMode.primary ? 'primaryText' : 'flatText';
	
	return (
		<View>
			<Pressable {...{onPress}} style={({pressed}) => pressed && styles.pressed}>
				<View style={[styles.button, styles[view], style]}>
					<Text style={[styles.buttonText, styles[buttonTextStyleQuery]]}>{title}</Text>
				</View>
			</Pressable>
		</View>
	)
};

export default Button;