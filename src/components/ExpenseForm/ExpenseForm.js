import { useState } from "react";
import Card from "../UI/Card"
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const [isFormVisible, setIsFormVisible] = useState(false);

    //If using single state
    // const [inpustState, setInputState] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const inputChangeHandler = (event) => {
        if(event.target.name === "title"){
            setTitle(event.target.value);
        }
           
        else if(event.target.name === "amount")
            setAmount(event.target.value);
        else if(event.target.name === "date")
            setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); 
        const newExpense = {title: enteredTitle, amount: enteredAmount, date: new Date(enteredDate)};
        setTitle('');
        setAmount('');
        setDate('');
        props.onAddExpense(newExpense);
        setIsFormVisible(false);
    }

    const cancelHandler = () => {
        setIsFormVisible(false);
    }

    return (
        <Card className="formContainer">
            {
                isFormVisible ? (
                    <form onSubmit={submitHandler} onReset={cancelHandler}>
                        <div className="expenseForm">
                            <input onChange={inputChangeHandler} type="text" name="title" placeholder="Add Expense Title Here.." value={enteredTitle} required/>
                            <input onChange={inputChangeHandler} type="number" name="amount" placeholder="Add Expense Amount Here.." value={enteredAmount} required/>
                            <input onChange={inputChangeHandler} type="date" name="date" value={enteredDate} required/>
                        </div>
                        <div className="buttonGroup">
                            <button type="reset">Cancel</button>
                            <button type="submit">Add Expense</button>
                        </div>
                    </form>
                ) : (
                    <button className="addNewExpenseBtn" onClick={()=>{setIsFormVisible(true)}}>Add new expense</button>
                )
            }
        </Card>
    )
};

export default ExpenseForm;