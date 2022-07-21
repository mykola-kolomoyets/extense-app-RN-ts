import {StyleSheet} from "react-native";
import {Colors} from "../../../utils/styles";

export default StyleSheet.create({
	container: {
		marginHorizontal: 4,
		marginVertical: 12,
	},
	
	label: {
		marginBottom: 8,
		
		fontSize: 16,
		
		color: Colors.primary100
	},
	
	input: {
		paddingVertical: 10,
		paddingHorizontal: 16,
		
		borderRadius: 6,
		
		fontSize: 18,
		
		backgroundColor: Colors.primary100,
		color: Colors.primary700
	},
	
	inputMultiline: {
		minHeight: 100,
		textAlignVertical: "top"
	}
});