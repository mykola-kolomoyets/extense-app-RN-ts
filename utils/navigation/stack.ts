import {NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {Colors} from "../styles";

/**
 * Navigator options
 */
export const stackNavigatorScreenProps: NativeStackNavigationOptions = {
	headerStyle: {backgroundColor: Colors.primary500}
};

/**
 * Screens options
 */
export const expensesOverviewScreenOptions: NativeStackNavigationOptions = {
	headerShown: false,
	title: 'Overview',
}

export const manageExpenseScreenOptions: NativeStackNavigationOptions = {
	presentation: 'modal',
	headerTitleStyle: { color: Colors.white }
}