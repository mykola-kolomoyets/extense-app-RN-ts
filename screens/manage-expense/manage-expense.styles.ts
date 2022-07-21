import { StyleSheet, Dimensions } from "react-native";
import {Colors} from "../../utils/styles";

export default StyleSheet.create({
	container: {
		flex: 1,
		
		padding: 24,
		
		backgroundColor: Colors.primary800
	},
	
	deleteContainer: {
		alignItems: "center",
		
		marginTop: 16,
		paddingTop: 8,
		
		borderTopWidth: 2,
		borderTopColor: Colors.primary200
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