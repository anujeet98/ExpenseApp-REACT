// import { useState } from "react";
import { useState } from "react";
import Card from "../UI/Card"
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    //If using single state
    // const [inpustState, setInputState] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const inputChangeHandler = (event) => {
        // if(event.target.name === "title"){
        //     // setInputState({
        //     //     ...inpustState,
        //     //     enteredTitle: event.target.value
        //     // })

        //     //Insted use this. safer way
        //     setInputState((previousState) => {
        //         return {...previousState, enteredTitle: event.target.value}
        //     })
        // }
        if(event.target.name === "title")
            setTitle(event.target.value);
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
    }

    return (
        <Card className="formContainer">
            <form onSubmit={submitHandler}>
                <div className="expenseForm">
                    <input onChange={inputChangeHandler} type="text" name="title" placeholder="Add Expense Title Here.." value={enteredTitle} required/>
                    <input onChange={inputChangeHandler} type="number" name="amount" placeholder="Add Expense Amount Here.." value={enteredAmount} required/>
                    <input onChange={inputChangeHandler} type="date" name="date" value={enteredDate} required/>
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </Card>
    )
};

export default ExpenseForm;