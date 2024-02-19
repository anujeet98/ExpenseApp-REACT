import { useState } from "react";
import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const itemDeleteHandler = (id) => {
		props.onDeleteExpense(id);
  };

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenseItems = props.items.filter((expense) => expense.date.getFullYear() === +filteredYear);

  return (
    <Card className="expenses">
		<ExpenseFilter
			className="expense_filter"
			selectedYear={filteredYear}
			onChangeFilter={filterChangeHandler}
		/>
		<br></br>
		<br></br>
		<ExpenseList onItemDelete={itemDeleteHandler} items={filteredExpenseItems}></ExpenseList>
    </Card>
  );
};

export default Expenses;
