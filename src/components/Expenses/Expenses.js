import './Expenses.css'
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses(props) {
  
  const [filteredYear, setFilteredYear] = useState('2023');
  
  const yearFilterHandler = selectedFilter => {
      setFilteredYear(selectedFilter);
  }

  return (
    <div className='expenses'>
        
        <div>
          <ExpenseFilter defaultFilterValue={filteredYear} onFilterChange={yearFilterHandler}/>
        </div>

        {/* Go through array and display each item on web page */}
        {props.expenses.map((expense) => {
            return (
                <ExpenseItem key={expense.id} expense={expense}/>
            )
        })}
       
    </div>
  );
}

export default Expenses