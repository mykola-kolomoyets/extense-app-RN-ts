import {FC} from "react";
import {FlatList} from "react-native";

import {ExpenseItem as ExpenseItemType} from "../../../utils/types/extenses";

import ExpenseItem from './../expense-item';

import styles from './expenses-list.styles';

type ExpensesListProps = {
	items: ExpenseItemType[];
}
const ExpensesList: FC<ExpensesListProps> = ({items}) => (
	<FlatList
		data={items}
		renderItem={(expenses) => <ExpenseItem data={expenses.item}/>}
		keyExtractor={(expense) => expense.id}
	/>
);

export default ExpensesList;