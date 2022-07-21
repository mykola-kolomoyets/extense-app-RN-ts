import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import RecentExpenses from "../../screens/recent-expences";
import AllExpenses from "../../screens/all-expenses";

import {
	allExpensesScreenOptions,
	bottomTabsNavigatorScreenOptions,
	recentExpensesScreenOptions
} from "../../utils/navigation/bottom-tabs";
import {BottomTabsScreens} from "../../utils/enums/screens";

import {BottomTansScreensParamList} from "../../utils/types/screens";

const BottomTabs = createBottomTabNavigator<BottomTansScreensParamList>();

const BottomTabsNavigator = () => (
	<BottomTabs.Navigator screenOptions={bottomTabsNavigatorScreenOptions}>
		<BottomTabs.Screen
			name={BottomTabsScreens.recentExpenses}
			component={RecentExpenses}
			options={recentExpensesScreenOptions}
		/>
		<BottomTabs.Screen
			name={BottomTabsScreens.allExpenses}
			component={AllExpenses}
			options={allExpensesScreenOptions}
		/>
	</BottomTabs.Navigator>
);

export default BottomTabsNavigator;