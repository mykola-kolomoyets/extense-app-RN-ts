import {FC, useLayoutEffect} from "react";
import {View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

import {addExpense, removeExpense, updateExpense} from "../../store/slices/expenses";
import {useDispatch} from "../../store";

import {StackScreensParamList} from "../../utils/types/screens";
import {StackScreens} from "../../utils/enums/screens";
import {Colors} from "../../utils/styles";

import useStackedNavigation from "../../utils/hooks/navigation/useStackedNavigation";

import {IconButtonProps} from "../../components/ui/button/icon-button";
import Button from "../../components/ui/button";
import ExpenseForm, {ExpenseFormValues} from "../../components/ui/expense-form";

import styles from './manage-expense.styles';

const deleteIconProps: IconButtonProps = {
	name: "trash",
	color: Colors.error500,
	size: 36
}

const ManageExpenses:
	FC<NativeStackScreenProps<StackScreensParamList, StackScreens.manageExpenses>> = ({
	route: {
		params: {id}
	}
}) => {
	const dispatch = useDispatch();
	
	const navigation = useStackedNavigation();
	
	const isEditing = Boolean(id);
	
	const onDeleteExpensePress = () => {
		dispatch(removeExpense({id: id!}));
		navigation.goBack();
	};
	
	const onCancelPress = () => navigation.goBack();
	
	const onConfirmPress = (data: ExpenseFormValues) => {
		if (id) dispatch(updateExpense({ id, data }));
		else dispatch(addExpense({item: {id: `${Math.random()}`, ...data}}));
		navigation.goBack();
	};
	
	useLayoutEffect(() => {
		navigation.setOptions({
			title: id ? "Edit Expense" : "Create Expense"
		});
	}, []);
	
	return (
		<View style={styles.container}>
			<ExpenseForm expenseId={id} onCancel={onCancelPress} onSubmit={onConfirmPress} />
			
			{isEditing && (
				<View style={styles.deleteContainer}>
					<Button.Icon
						onPress={onDeleteExpensePress}
						{...deleteIconProps}
					/>
				</View>
			)}
			
		</View>
	)
};

export default ManageExpenses;