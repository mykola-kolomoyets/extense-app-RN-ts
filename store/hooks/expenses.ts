import {useSelector} from "../index";

export const useExpensesSelector = () => useSelector(state => state.expenses);
