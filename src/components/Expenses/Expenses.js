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
  return (
    <Card className="expenses">
        <ExpenseFilter className="expense_filter" selectedYear={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter><br></br><br></br>
        {
            props.items.map((item) => (
                <ExpenseItem
                    key={item.id}
                    date={item.date}
                    location={item.location}
                    title={item.title}
                    amount={item.amount}
                ></ExpenseItem>
            ))
        }
    </Card>
  );
}

export default Expenses;
