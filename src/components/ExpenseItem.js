import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2024, 2, 17);
    const expenseTitle = 'Food';
    const expenseAmount = 10; 
    const expenseLocation = "Mumbai";
  return (
    <div>
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <h2>{expenseLocation}</h2>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">Rs. {expenseAmount}</div>
        </div>
      </div>
      <div className="expense-item">
        <div>Feb 17 2024</div>
        <div className="expense-item__description">
          <h2>Petrol</h2>
          <div className="expense-item__price">Rs. 100</div>
        </div>
      </div>
      <div className="expense-item">
        <div>Feb 17 2024</div>
        <div className="expense-item__description">
          <h2>Movies</h2>
          <div className="expense-item__price">Rs. 200</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
