import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id:'e1',
      title: 'Car Insurance', 
      amount: 294.67, 
      date: new Date(2022, 10, 21)
    },
    {
      id:'e2',
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2022, 11, 21)
    },
    {
      id:'e3',
      title: 'Toliet Paper', 
      amount: 94.24, 
      date: new Date(2022, 12, 21)
    },
    {
      id:'e4',
      title: 'New Table (wooden)', 
      amount: 450, 
      date: new Date(2023, 1, 21)
    }
  ]

  return (
    <div className="App">
      <ExpenseItem
       expenses={expenses}
       />
      
    </div>
  );
}

export default App;
