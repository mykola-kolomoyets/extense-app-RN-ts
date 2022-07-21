import {FC, useMemo, useState} from "react";
import {KeyboardAvoidingView, TextInputProps, View, Text} from 'react-native';

import Input from "../input";

import {InputType} from "../../../utils/enums/input";

import styles from './expense-form.styles';

type ExpenseFormValues = {
	amount: number;
	date: string;
	description: string;
};

const defaultFormValues: ExpenseFormValues = {
	amount: 0,
	date: '',
	description: ''
};

const ExpenseForm: FC<{}> = () => {
	const [values, setValues] = useState<ExpenseFormValues>(defaultFormValues);
	
	const onFieldChange = (field: keyof ExpenseFormValues, value: string) =>
		setValues(prev => ({...prev, [field]: value}));
	
	const amountInputProps = useMemo<TextInputProps>(() => ({
		value: values.amount.toString(),
		onChangeText: onFieldChange.bind(this,"amount"),
		maxLength: 12
	}), [values.amount]);
	
	const dateInputProps = useMemo<TextInputProps>(() => ({
		value: values.date,
		onChangeText: onFieldChange.bind(this,"date"),
		placeholder: "DD-MM-YYYY",
		maxLength: 10
	}), [values.date]);
	
	const descriptionInputProps = useMemo<TextInputProps>(() => ({
		onChangeText: onFieldChange.bind(this,"description"),
		multiline: true,
		autoCapitalize: "sentences"
	}), [values.description]);
	
	return (
		<KeyboardAvoidingView style={styles.form} behavior="height">
			<Text style={styles.title}>Your Expense</Text>
			
			<View style={styles.row}>
				<Input
					style={styles.rowInput}
					type={InputType.decimalNumber}
					label="Amount"
					inputProps={amountInputProps}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					inputProps={dateInputProps}
				/>
			</View>
			
			<Input label="Description" inputProps={descriptionInputProps}/>
		</KeyboardAvoidingView>
	);
};

export default ExpenseForm;