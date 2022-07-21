import {FC} from "react";
import {View} from "react-native";

import {ExpenseItem} from "../../../utils/types/extenses";

import ExpensesSummary from "../../ui/expenses-summary";
import ExpensesList from "../../ui/expenses-list";
import {Period} from "../../../utils/enums/common";

type ExpensesOutputProps = {
	expenses: ExpenseItem[];
	period: Period;
};
const ExpensesOutput: FC<ExpensesOutputProps> = ({expenses, period}) => {
	return (
		<View>
			<ExpensesSummary {...{period, expenses}}/>
			<ExpensesList items={expenses} />
		</View>
	)
};

export default ExpensesOutput;