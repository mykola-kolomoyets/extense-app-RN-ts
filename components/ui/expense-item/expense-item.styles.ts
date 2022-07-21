import {StyleSheet} from "react-native";
import {Colors} from "../../../utils/styles";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		
		padding: 12,
		marginVertical: 8,
		
		borderRadius: 6,
		
		backgroundColor: Colors.primary500,
		
		elevation: 3,
		shadowColor: Colors.gray500,
		shadowRadius: 4,
		shadowOffset: {width: 1, height: 1},
		shadowOpacity: 0.4
	},
	
	pressed: {
		opacity: 0.75
	},
	
	textBase: {
		color: Colors.primary50,
	},
	
	description: {
		fontSize: 16,
		fontWeight: "bold",
		
		marginBottom: 4,
	},
	
	textContainer: {
		flex: 3,
	},
	
	amountContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		
		paddingHorizontal: 12,
		paddingVertical: 4,
		
		borderRadius: 6,
		
		backgroundColor: Colors.white
	},
	
	amount: {
		fontWeight: "bold",
		
		color: Colors.primary500,
	}
	
	
});