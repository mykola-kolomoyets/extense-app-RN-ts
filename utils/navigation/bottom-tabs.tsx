import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import {Colors} from "../styles";

/**
 * Navigator options
 */
export const bottomTabsNavigatorScreenOptions: BottomTabNavigationOptions = {
	headerStyle: {backgroundColor: Colors.primary500},
	headerTintColor: Colors.white,
	tabBarStyle: {backgroundColor: Colors.primary500},
	tabBarActiveTintColor: Colors.accent500
};

/**
 * Screens options
 */
export const recentExpensesScreenOptions: BottomTabNavigationOptions = {
	title: 'Recent Expenses',
	tabBarLabel: 'Recent',
	tabBarIcon: (params) => <Ionicons name='hourglass' {...params} />
};

export const allExpensesScreenOptions: BottomTabNavigationOptions = {
	title: 'All Expenses',
	tabBarLabel: 'All',
	tabBarIcon: (params) => <Ionicons name='calendar' {...params} />
};