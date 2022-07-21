import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import RecentExpenses from "../../screens/recent-expences";
import AllExpenses from "../../screens/all-expenses";

import {
	allExpensesScreenOptions,
	bottomTabsNavigatorScreenOptions,
	recentExpensesScreenOptions
} from "../../utils/navigation/bottom-tabs";
import {BottomTabsScreens, StackScreens} from "../../utils/enums/screens";

import {BottomTansScreensParamList} from "../../utils/types/screens";
import IconButton, {IconButtonProps} from "../ui/button/icon-button";
import Button from "../ui/button";

const BottomTabs = createBottomTabNavigator<BottomTansScreensParamList>();

const BottomTabsNavigator = () => {
	const onPlusPress = (navigation: any) => navigation.navigate(StackScreens.manageExpenses, { id: null });
	
	const headerRightButtonProps = (tintColor: string, navigation: any): IconButtonProps => ({
		name: 'add',
		size: 24,
		color: tintColor,
		onPress: () => onPlusPress(navigation)
	});
	
	return (
		<BottomTabs.Navigator screenOptions={({ navigation }) => ({
			...bottomTabsNavigatorScreenOptions,
			headerRight: ({ tintColor }) => <Button.Icon {...headerRightButtonProps(tintColor!, navigation)} />
		})}>
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
}

export default BottomTabsNavigator;