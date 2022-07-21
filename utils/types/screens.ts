import {BottomTabsScreens, StackScreens} from "../enums/screens";

export type BottomTansScreensParamList = {
	[BottomTabsScreens.allExpenses]: undefined;
	[BottomTabsScreens.recentExpenses]: undefined;
	
}

export type StackScreensParamList = {
	[StackScreens.manageExpenses]: { id: string | null };
	[StackScreens.overview]: undefined;
};