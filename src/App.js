// import ExpenseItem from "./components/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "1",
      date: new Date(2024, 2, 17),
      location: "Mumbai",
      title: "Food",
      amount: 10,
    },
    {
      id: "2",
      date: new Date(2024, 2, 3),
      location: "Pune",
      title: "Petrol",
      amount: 100,
    },
    {
      id: "3",
      date: new Date(2023, 12, 23),
      location: "Delhi",
      title: "Movie",
      amount: 200,
    },
  ];
  return (
    <div>
      <ExpenseForm className="expenseForm"></ExpenseForm>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
