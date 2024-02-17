import ExpenseItem from "./components/ExpenseItem";

function App() {
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
      <h2>Let's get started!</h2>
      {
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            location={expense.location}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))
      }
    </div>
  );
}

export default App;
