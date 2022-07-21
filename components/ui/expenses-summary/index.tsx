import {FC} from "react";
import {Text, View} from "react-native";

import {Period} from "../../../utils/enums/common";
import {ExpenseItem} from "../../../utils/types/extenses";

import {getFixedNumber, getSum} from "../../../utils/functions";

import styles from './expenses-summary';

type ExpensesSummaryProps = {
	expenses: ExpenseItem[];
	period: Period;
}
const ExpensesSummary: FC<ExpensesSummaryProps> = ({period, expenses}) => {
	const summaryAmount = getSum(expenses, 'amount');
	
	return (
		<View>
			<Text>{period}</Text>
			<Text>${getFixedNumber(summaryAmount)}</Text>
		</View>
	);
}

export default ExpensesSummary;