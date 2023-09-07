import './ExpensesFilter.css';

const ExpensesFilter = (props)=>{
    const onSelecthandler = (event)=>{
       props.onSelectYearHandler(event.target.value)
    }
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label for='years'>Select a year</label>
                <select  onChange={onSelecthandler} name='years'>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter