// import { useState } from "react";
import Card from "../UI/Card"
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <Card className="formContainer">
            <div className="expenseForm">
                <FormInput type="text" placeholder="Add Expense Title Here.."/>
                <FormInput type="number" placeholder="Add Expense Amount Here.."/>
                <FormInput type="date"/>
            </div>
            <FormButton value="Add Expense"/>
        </Card>
    )
};

export default ExpenseForm;