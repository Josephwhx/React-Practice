import './Expenses.css'
import { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  
  const [filteredYear, setFilteredYear] = useState('2023');
  
  const yearFilterHandler = selectedFilter => {
      setFilteredYear(selectedFilter);
  }

  const filteredExpenses = props.expenses.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear
  });

  return (
    <div className='expenses'>
        
        <div>
          <ExpenseFilter defaultFilterValue={filteredYear} onFilterChange={yearFilterHandler}/>
        </div>

        <ExpensesChart expenses={filteredExpenses}/>
        
        <ExpensesList items={filteredExpenses}/>
       
    </div>
  );
}

export default Expenses