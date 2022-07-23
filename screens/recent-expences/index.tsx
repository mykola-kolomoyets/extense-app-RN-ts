import ExpensesOutput from "../../components/layout/expenses-output";

import {Period} from "../../utils/enums/common";

const RecentExpenses = () => (
	<ExpensesOutput period={Period.last7Days}/>
);

export default RecentExpenses;