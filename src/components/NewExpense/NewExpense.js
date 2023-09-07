import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props)=>{
    const onExpenseSubmitHandler = (expenseData)=>{
       
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expense)
    }
    return (<div>
        <ExpenseForm onExpenseSubmit={onExpenseSubmitHandler}/>
    </div>)
}
export default NewExpense