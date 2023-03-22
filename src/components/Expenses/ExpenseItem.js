import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    // Array destructuring
    const [title, setTitle] = useState(props.expense.title);

    const clickHandler = () => {
        setTitle("Updated");
    }
    
  return (
    <Card key={props.expense.id} className='expense-item'>
                    <ExpenseDate date={props.expense.date}/>
            
                    <div className='expense-item__description'>
                        <h2>{title}</h2>
                        <div className='expense-item__price'>${props.expense.amount}</div>
                    </div>
                    <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem