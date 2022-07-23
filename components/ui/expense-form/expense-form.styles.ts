import {Dimensions, StyleSheet} from "react-native";
import {Colors} from "../../../utils/styles";

export default StyleSheet.create({
	form: {
		marginTop: 50
	},
	
	title: {
		textAlign: "center",
		
		fontSize: 24,
		fontWeight: "bold",
		
		color: Colors.white
	},
	
	row: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	
	rowInput: {
		flex: 1,
	},
	
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	
	button: {
		minWidth: Dimensions.get("screen").width / 2 - 32,
		marginHorizontal: 8
	}
});