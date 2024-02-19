import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = props => {
    const deleteItemHandler = (id) => {
        props.onItemDelete(id);
    };

    if(props.items.length === 0)
        return <h2 className="expenses-list__fallback">No items to display</h2>;

    const message = props.items.length === 1 ? <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2> : '';

    return (
        <div>
            <ul className="expenses-list">
                {props.items.map((item) => (
                    <ExpenseItem
                        onDeleteItem={deleteItemHandler}
                        key={item.id}
                        id={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                    />
                ))}
            </ul>
            {message}
        </div>
    );
}

export default ExpenseList;