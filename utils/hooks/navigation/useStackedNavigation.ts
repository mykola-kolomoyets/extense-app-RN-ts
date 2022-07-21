import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

import {StackScreensParamList} from "../../types/screens";

export default () => useNavigation<NativeStackNavigationProp<StackScreensParamList>>();