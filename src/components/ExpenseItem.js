import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    
  return (
    <div className='expenses'>
        
        {/* Go through array and display each item on web page */}
        {props.expenses.map((expense) => {
            return (
                <Card key={expense.id} className='expense-item'>
                    <ExpenseDate date={expense.date}/>
            
                    <div className='expense-item__description'>
                        <h2>{expense.title}</h2>
                        <div className='expense-item__price'>${expense.amount}</div>
                    </div>
                </Card>
            )
        })}
       
    </div>
  );
}

export default ExpenseItem