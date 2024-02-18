import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');
  const filterChangeHandler = (year) => {
      setFilteredYear(year);
  }
  const deleteItemHandler = (id) => {
        props.onDeleteExpense(id);
  }
  return (
    <Card className="expenses">
        <ExpenseFilter className="expense_filter" selectedYear={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter><br></br><br></br>
        {
            props.items.map((item) => (
                <ExpenseItem
                    onDeleteItem={deleteItemHandler}
                    key={item.id}
                    id={item.id}
                    date={item.date}
                    title={item.title}
                    amount={item.amount}
                />
            ))
        }
    </Card>
  );
}

export default Expenses;
