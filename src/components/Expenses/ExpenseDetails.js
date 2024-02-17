import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setAmount] = useState(props.amount);
  const updateTitleHandler = () => {
      setTitle('updated!!!');
      // console.log(title);
  }
  const updateAmountHandler = () => {
      setAmount('100');
      // console.log(amount);
  }
  const deleteHandler = (event) => {
      const targetExpense = event.target.parentElement.parentElement;
      document.querySelector('.expenses').removeChild(targetExpense);
  }
  return (
    <div className="expense-item__description">
      <h2>{props.location}</h2>
      <h2>{title}</h2>
      <Card className="expense-item__price">Rs. {price}</Card>
      <button onClick={event => deleteHandler(event)}>Delete</button>
      <button onClick={updateTitleHandler}>update title</button>
      <button onClick={updateAmountHandler}>update price</button>
    </div>
  );
}

export default ExpenseDetails;
