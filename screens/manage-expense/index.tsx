import {FC, useLayoutEffect} from "react";
import {View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

import {StackScreensParamList} from "../../utils/types/screens";
import {StackScreens} from "../../utils/enums/screens";
import {Colors} from "../../utils/styles";

import useStackedNavigation from "../../utils/hooks/navigation/useStackedNavigation";

import {IconButtonProps} from "../../components/ui/button/icon-button";
import Button from "../../components/ui/button";
import ExpenseForm from "../../components/ui/expense-form";

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
	const navigation = useStackedNavigation();
	
	const isEditing = Boolean(id);
	
	const onDeleteExpensePress = () => {};
	
	const onCancelPress = () => navigation.goBack();
	
	const onConfirmPress = () => {};
	
	useLayoutEffect(() => {
		navigation.setOptions({
			title: id ? "Edit Expense" : "Create Expense"
		});
	}, []);
	
	return (
		<View style={styles.container}>
			<ExpenseForm />
			
			<View style={styles.buttonsContainer}>
				<Button.Flat title="Cancel" onPress={onCancelPress} style={styles.button}/>
				<Button.Primary title={isEditing ? "Update" : "Add"} onPress={onConfirmPress} style={styles.button}/>
			</View>
			
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