
import './Expenses.css'
import ExpenseList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react';
 import Card from '../UI/Card';
 import ExpensesChart from './ExpensesChart';

 //import ExpenseItem from './ExpenseItem';

const Expenses = (props)=>{
   const [filteredYear, setFilteredYear] = useState('2020');
   //console.log('Here expenses',props.expenses)
    const onSelectYear = (year)=>{
      setFilteredYear( year) 
    }
   const filteredYearExpenses = (props.expenses.filter((expense)=>(expense.date.getFullYear().toString()) === filteredYear))
    return (
      <div>
      <Card className='expenses'>
      <ExpensesFilter  selected={filteredYear} onSelectYearHandler={onSelectYear} />
       <ExpensesChart expenses={filteredYearExpenses} />
      <ExpenseList filteredYearExpenses={filteredYearExpenses} />
      </Card>
      
      </div>
    )
}
export default Expenses