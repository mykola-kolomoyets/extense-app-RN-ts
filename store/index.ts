import {
	TypedUseSelectorHook,
	useDispatch as useReduxDispatch,
	useSelector as useReduxSelector
} from "react-redux";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import expensesReducer from './slices/expenses';

const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false
})

const store =  configureStore({
	reducer: {
		expenses: expensesReducer
	},
	middleware: customizedMiddleware
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useDispatch: () => Dispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export default store;
