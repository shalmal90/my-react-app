import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';
import { useState } from 'react';


const ExpenseItem = (props)=> {  
  const [title, setTitle] = useState(props.title);
  const changeName = ()=>{
    setTitle('changed !');
  }
  const changeName2 = ()=>{
    setTitle('changed ! 2');
  }
  return (
    <Card className={'expense-item'}>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <button onClick={changeName} className='expense-item__price'>${props.amount}</button>
      </div>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeName2}>Change Name2</button>
    </Card>
  );
}

export default ExpenseItem;