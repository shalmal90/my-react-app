import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

const NewExpense = (props)=>{
   
    const [expForm,setExpForm] = useState(false);
    const onExpenseSubmitHandler = (expenseData)=>{
       
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expense)
        setExpForm(false)
    }
     const showFormButton =()=>{
        setExpForm(true)
    }
    const stopFormButton =()=>{
        setExpForm(false)
    }
    
    
    return (<div>
        {!expForm && <button onClick={showFormButton}>Add new expense</button>}
        {expForm && <ExpenseForm onExpenseSubmit={onExpenseSubmitHandler} onCancel={stopFormButton}/>}
    </div>)
}
export default NewExpense