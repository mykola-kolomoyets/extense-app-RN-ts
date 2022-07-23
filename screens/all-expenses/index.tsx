import ExpensesOutput from "../../components/layout/expenses-output";

import {Period} from "../../utils/enums/common";

const AllExpenses = () => (
	<ExpensesOutput period={Period.total}/>
);

export default AllExpenses;