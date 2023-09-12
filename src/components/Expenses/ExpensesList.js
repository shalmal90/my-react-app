 import Card from '../UI/Card';
 import ExpenseItem from './ExpenseItem';
 const ExpenseList = (props)=>{
    return  (<Card className='expenses'>
        {props.filteredYearExpenses.length===0 ? <p>No expenses found</p>:(
        props.filteredYearExpenses.map((expense)=>{ 
          return(
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)}))}
      </Card>)
 }
 export default  ExpenseList
