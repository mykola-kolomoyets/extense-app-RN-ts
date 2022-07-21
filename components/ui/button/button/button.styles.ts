import {StyleSheet} from "react-native";
import {Colors} from "../../../../utils/styles";

export default StyleSheet.create({
	button: {
		borderRadius: 4,
		padding: 8,
	},
	
	buttonText: {
		textAlign: "center"
	},
	
	primary: {
		backgroundColor: Colors.primary500
	},
	
	primaryText: {
		color: Colors.white
	},
	
	flat: {
		backgroundColor: "transparent"
	},
	
	flatText: {
		color: Colors.primary100
	},
	
	pressed: {
		opacity: 0.75,
		
		borderRadius: 4
	},
	
});