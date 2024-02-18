// import { useState } from "react";
import { useState } from "react";
import Card from "../UI/Card"
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [title, enteredTitle] = useState('');
    const [amount, enteredAmount] = useState('');
    const [date, enteredDate] = useState();

    const inputChange = (event) => {
        if(event.target.name === "title")
            enteredTitle(event.target.value);
        else if(event.target.name === "amount")
            enteredAmount(event.target.value);
        else if(event.target.name === "date")
            enteredDate(event.target.value);
    }
    return (
        <Card className="formContainer">
            <div className="expenseForm">
                <input onChange={inputChange} type="text" name="title" placeholder="Add Expense Title Here.." value={title}/>
                <input onChange={inputChange} type="number" name="amount" placeholder="Add Expense Amount Here.." value={amount}/>
                <input onChange={inputChange} type="date" name="date" value={date}/>
            </div>
            <button>Add Expense</button>
        </Card>
    )
};

export default ExpenseForm;