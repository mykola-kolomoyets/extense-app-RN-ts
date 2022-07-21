import {StyleSheet} from "react-native";

import {Colors} from "../../../utils/styles";

export default StyleSheet.create({
	container: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		marginBottom: 16,
		
		backgroundColor: Colors.primary50,
		borderRadius: 6,
		
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	
	period: {
		fontSize: 16,
		color: Colors.primary400
	},
	
	amount: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.primary500
	}
});