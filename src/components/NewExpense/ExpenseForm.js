import React, {useState} from 'react'

import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Alternative (using single useState instead of 3)
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })


    const titleChangeHandler = (event) => {
        // For individual useState
        //-------------------------------------
        setEnteredTitle(event.target.value);

        // For single useState (combined) 
        // Not a good practice
        //-------------------------------------
        // get previous value of input (prevent changing other fields)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // For single useState (combined)
        // a better alternative
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });

    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onFormStatus();
    }
    

  return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                    type='text'
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input
                    type='number'
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input
                    type='date'
                    min="2019-01-01"
                    max="2029-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onFormStatus}>Close</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm