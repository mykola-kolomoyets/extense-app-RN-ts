import {createNativeStackNavigator} from "@react-navigation/native-stack";

import BottomTabsNavigator from "./bottom-tabs";

import ManageExpenses from "../../screens/manage-expense";

import {StackScreens} from "../../utils/enums/screens";
import {StackScreensParamList} from "../../utils/types/screens";

import {
	expensesOverviewScreenOptions,
	manageExpenseScreenOptions,
	stackNavigatorScreenProps
} from "../../utils/navigation/stack";


const Stack = createNativeStackNavigator<StackScreensParamList>();

const StackNavigator = () => (
	<Stack.Navigator
		initialRouteName={StackScreens.overview}
		screenOptions={stackNavigatorScreenProps}
	>
		<Stack.Screen
			name={StackScreens.manageExpenses}
			component={ManageExpenses}
			options={manageExpenseScreenOptions}
		/>
		
		<Stack.Screen
			name={StackScreens.overview}
			component={BottomTabsNavigator}
			options={expensesOverviewScreenOptions}
		/>
	</Stack.Navigator>
);

export default StackNavigator;

