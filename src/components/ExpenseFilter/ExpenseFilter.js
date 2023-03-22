import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter(props) {

    const filterHandler = (event) => {
        const selectedYear = event.target.value;

        props.onFilterChange(selectedYear);
    }
    
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.defaultSelectedValue} onChange={filterHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
        </div>
    </div>
  )
}

export default ExpenseFilter