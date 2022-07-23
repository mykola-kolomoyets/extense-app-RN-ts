import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";

import {ExpenseItem} from "../../utils/types/extenses";

import {EXPENSES} from "../../data";


interface ExpensesState {
	expenses: ExpenseItem[];
}

const initialState: ExpensesState = {
	expenses: EXPENSES
}

const expensesSlice = createSlice({
	name: "expenses",
	initialState,
	reducers: {
		addExpense: (state, action: PayloadAction<{ item: ExpenseItem }>) => {
			console.log('updated');
			state.expenses.push(action.payload.item);
		},
		
		removeExpense: (state, action: PayloadAction<{ id: string }>) => {
			const expenseToDelete = state.expenses.find(expense => expense.id === action.payload.id)!;
			const expenseIndex = state.expenses.indexOf(expenseToDelete)!;
			
			state.expenses.splice(expenseIndex, 1);
		},
		
		updateExpense: (state, action: PayloadAction<{ id: string, data: Partial<ExpenseItem> }>) => {
			const currentExpense = state.expenses.find(expense => expense.id === action.payload.id)!;
			const expenseIndex = state.expenses.indexOf(currentExpense)!;
			
			state.expenses.splice(expenseIndex, 1, {...currentExpense, ...action.payload.data});
		}
	}
});

export const {
	addExpense,
	removeExpense,
	updateExpense
} = expensesSlice.actions;

export default expensesSlice.reducer;