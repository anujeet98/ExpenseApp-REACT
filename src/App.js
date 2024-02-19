// import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (newExpense) => {
      const expenseData = {...newExpense, id:Math.round((Math.random()*10000)).toString()};
      setExpenses(prevExpenses => {
        return [...prevExpenses, expenseData];
      });
  }

  const deleteExpenseHandler = (id) => {
      setExpenses(oldExpenses => {
          return oldExpenses.filter(expense => expense.id!==id);
      })
  }

  return (
    <div>
      <ExpenseForm className="expenseForm" onAddExpense={addExpenseHandler}></ExpenseForm>
      <Expenses onDeleteExpense={deleteExpenseHandler} items={expenses}></Expenses>
    </div>
  );
}

export default App;
