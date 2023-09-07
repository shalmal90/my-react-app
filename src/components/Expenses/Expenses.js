import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import { useState,useEffect } from 'react';



const Expenses = (props)=>{
  //const [expenses,setExpenses] = useState(initExpenses);
   const [filteredYear, setFilteredYear] = useState('2020');
    const onSelectYear = (year)=>{
        console.log('selected',year)
        setFilteredYear(year)
    }
    return (
      <div>
      <ExpensesFilter  selected={filteredYear} onSelectYearHandler={onSelectYear} />
        <Card className='expenses'>
        {props.expenses.map((expense)=>{return(
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)}
        )}
      </Card>
      </div>
    )
}
export default Expenses