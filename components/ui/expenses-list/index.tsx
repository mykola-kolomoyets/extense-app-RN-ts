import {FC} from "react";
import {FlatList} from "react-native";

import {ExpenseItem} from "../../../utils/types/extenses";

import ExpenseItemComponent from './../expense-item';

import styles from './expenses-list.styles';

type ExpensesListProps = {
	items: ExpenseItem[];
}
const ExpensesList: FC<ExpensesListProps> = ({items}) => (
	<FlatList
		data={items}
		renderItem={(expenses) => <ExpenseItemComponent data={expenses.item}/>}
		keyExtractor={(expense) => expense.id}
	/>
);

export default ExpensesList;