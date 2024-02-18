import React from 'react';
import Card from '../UI/Card';
import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
  const deleteHandler = (event) => {
      const targetExpense = event.target.parentElement.parentElement;
      document.querySelector('.expenses').removeChild(targetExpense);
  }
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <Card className="expense-item__price">Rs. {props.amount}</Card>
      <button onClick={event => deleteHandler(event)}>Delete</button>
    </div>
  );
}

export default ExpenseDetails;
