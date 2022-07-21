import {useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";

import {BottomTansScreensParamList} from "../../types/screens";

export default () => useNavigation<BottomTabNavigationProp<BottomTansScreensParamList>>();