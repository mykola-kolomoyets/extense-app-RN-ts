import {FC, useMemo} from "react";
import {View} from "react-native";

import {ExpenseItem} from "../../../utils/types/extenses";
import {Period} from "../../../utils/enums/common";
import {getDateDelta, getDaysFromMilliseconds} from "../../../utils/functions";

import ExpensesSummary from "../../ui/expenses-summary";
import ExpensesList from "../../ui/expenses-list";

import styles from './expenses-output.styles';

type ExpensesOutputProps = {
	expenses: ExpenseItem[];
	period: Period;
};
const ExpensesOutput: FC<ExpensesOutputProps> = ({expenses, period}) => {
	const filterLast7DaysExpenses = (expense: ExpenseItem) =>
		getDaysFromMilliseconds(getDateDelta(new Date(), new Date(expense.date))) <= 7;
	
	const expensesToDisplay = useMemo(() => period === Period.total
		? expenses
		: expenses.filter(filterLast7DaysExpenses)
	, [expenses, period]);
	
	return (
		<View style={styles.container}>
			<ExpensesSummary {...{period, expenses: expensesToDisplay}}/>
			<ExpensesList items={expensesToDisplay} />
		</View>
	)
};

export default ExpensesOutput;