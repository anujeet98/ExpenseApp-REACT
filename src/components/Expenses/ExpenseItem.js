import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const deleteHandler = (id) => {
      props.onDeleteItem(id);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails amount={props.amount}  title={props.title} />
      <button onClick={() => deleteHandler(props.id)}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
