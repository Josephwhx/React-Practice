import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

function NewExpense(props) {

  const [formStatus, setFormStatus] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const formStatusHandler = () => {
      setFormStatus(!formStatus);
    }

  return (
    <div className='new-expense'>
        {!formStatus && <button onClick={formStatusHandler}>Add New Expense</button>}
        {formStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onFormStatus={formStatusHandler}/>}
    </div>
  )
}

export default NewExpense