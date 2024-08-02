import './List.css'

const List = (props) =>{
    return(
        <div className='list'>
            <label>{props.label}</label>
            <select onChange={event => props.setChanged(event.target.value)} required={props.required} value={props.value}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default List