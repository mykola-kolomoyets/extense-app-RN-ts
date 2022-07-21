import {EXPENSES} from "../../data";

import ExpensesOutput from "../../components/layout/expenses-output";

import {Period} from "../../utils/enums/common";

const AllExpenses = () => (
	<ExpensesOutput expenses={EXPENSES} period={Period.total}/>
);

export default AllExpenses;