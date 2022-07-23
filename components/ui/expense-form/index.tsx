import {FC, useEffect, useMemo, useState} from "react";
import {KeyboardAvoidingView, TextInputProps, View, Text} from 'react-native';

import Input from "../input";

import {InputType} from "../../../utils/enums/input";

import styles from './expense-form.styles';
import Button from "../button";
import {useExpensesSelector} from "../../../store/hooks/expenses";
import {getDateString} from "../../../utils/functions";
import {ExpenseItem} from "../../../utils/types/extenses";
import {useDispatch} from "../../../store";

export type ExpenseFormValues = Omit<ExpenseItem, "id">;
type ExpenseFormErrors = {
	amount: string;
	date: string;
	description: string;
}

const defaultFormValues: ExpenseFormValues = {
	amount: 0,
	date: new Date(),
	description: ''
};

const defaultFormErrors: ExpenseFormErrors = {
	amount: "",
	date: "",
	description: ""
};

type ExpenseFormProps = {
	expenseId: string | null;
	onCancel: () => void;
	onSubmit: (values: ExpenseFormValues) => void;
}
const ExpenseForm: FC<ExpenseFormProps> = ({onCancel, onSubmit, expenseId}) => {
	const {expenses} = useExpensesSelector();
	
	const [values, setValues] = useState<ExpenseFormValues>(defaultFormValues);
	const [errors, setErrors] = useState<ExpenseFormErrors>(defaultFormErrors);
	
	const isEditing = useMemo(() => Boolean(expenseId), [expenseId]);
	
	const onFieldChange = (field: keyof ExpenseFormValues, value: string) =>
		setValues(prev => ({...prev, [field]: value}));
	
	const onSubmitPress = () => {
		const { amount, description } = values;
		
		const isAmountValid = !isNaN(amount) && amount > 0;
		const isDescriptionValid = Boolean(description.length);
		
		setErrors(prev => ({
			...prev,
			amount: !isAmountValid ? "Enter valid number": "",
			description: !isDescriptionValid ? "Enter the description" : ""
		}));
		
		if (isAmountValid && isDescriptionValid) onSubmit(values);
	}
	
	const amountInputProps = useMemo<TextInputProps>(() => ({
		value: values.amount.toString(),
		onChangeText: onFieldChange.bind(this, "amount"),
		maxLength: 12
	}), [values.amount]);
	
	const dateInputProps = useMemo<TextInputProps>(() => ({
		value: getDateString(values.date),
		onChangeText: onFieldChange.bind(this, "date"),
		placeholder: "DD-MM-YYYY",
		maxLength: 10
	}), [values.date]);
	
	const descriptionInputProps = useMemo<TextInputProps>(() => ({
		value: values.description,
		onChangeText: onFieldChange.bind(this, "description"),
		multiline: true,
		autoCapitalize: "sentences"
	}), [values.description]);
	
	
	useEffect(() => {
		if (expenseId) {
			const expenseToEdit = expenses.find(expense => expense.id === expenseId);
			
			expenseToEdit && setValues(prev => ({
				...prev,
				amount: expenseToEdit.amount,
				date: new Date(expenseToEdit.date),
				description: expenseToEdit.description
			}));
		}
	}, [expenseId]);
	
	return (
		<KeyboardAvoidingView style={styles.form} behavior="height">
			<Text style={styles.title}>Your Expense</Text>
			
			<View style={styles.row}>
				<Input
					style={styles.rowInput}
					label="Amount"
					type={InputType.decimalNumber}
					inputProps={amountInputProps}
					error={errors.amount}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					inputProps={dateInputProps}
				/>
			</View>
			
			<Input label="Description" inputProps={descriptionInputProps} error={errors.description}/>
			
			<View style={styles.buttonsContainer}>
				<Button.Flat title="Cancel" onPress={onCancel} style={styles.button}/>
				<Button.Primary title={isEditing ? "Update" : "Add"} onPress={onSubmitPress} style={styles.button}/>
			</View>
		</KeyboardAvoidingView>
	);
};

export default ExpenseForm;