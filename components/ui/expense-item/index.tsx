import {FC} from "react";
import {Pressable, Text, View} from "react-native";

import {ExpenseItem as ExpenseItemType} from "../../../utils/types/extenses";

import {getDateString} from "../../../utils/functions";

import styles from './expense-item.styles';
import {useNavigation} from "@react-navigation/native";
import {StackScreens} from "../../../utils/enums/screens";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackScreensParamList} from "../../../utils/types/screens";
import useStackedNavigation from "../../../utils/hooks/navigation/useStackedNavigation";

type ExpenseItemProps = {
	data: ExpenseItemType;
}
const ExpenseItem: FC<ExpenseItemProps> = ({
	 data: {
		 id,
		 amount,
		 date,
		 description
	 }
 }) => {
	const navigation = useStackedNavigation();
	
	const onPress = () => navigation.navigate(StackScreens.manageExpenses, { id });
	
	return (
		<Pressable
			style={({pressed}) => pressed && styles.pressed}
			{...{onPress}}
		>
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={[styles.textBase, styles.description]}>{description}</Text>
					<Text style={styles.textBase}>{getDateString(date)}</Text>
				</View>
				
				<View style={styles.amountContainer}>
					<Text style={styles.amount}>${amount}</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default ExpenseItem;