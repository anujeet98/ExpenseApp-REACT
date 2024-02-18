import React from 'react';
import Card from '../UI/Card';
import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <Card className="expense-item__price">Rs. {props.amount}</Card>
    </div>
  );
}

export default ExpenseDetails;
