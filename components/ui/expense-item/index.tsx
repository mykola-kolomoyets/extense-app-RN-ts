import {FC} from "react";
import {Text, View} from "react-native";

import {ExpenseItem} from "../../../utils/types/extenses";

import styles from './expense-item.styles';

type ExpenseItemProps = {
	data: ExpenseItem;
}
const ExpenseItem: FC<ExpenseItemProps> = ({ data }) => (
	<View>
		<Text>Expense item</Text>
	</View>
);

export default ExpenseItem;