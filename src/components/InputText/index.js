import { useState } from 'react'
import './InputText.css'

const InputText = (props) => {

    let value = ""

    const setTyped = (event) => {
        props.setChanged(event.target.value)
        console.log(value)
    }

    return (
        <div className='text'>
            <label>{props.label}</label>
            <input value={props.value} onChange={setTyped} required={props.required} placeholder='Digite aqui'></input>
        </div>
    )
}

export default InputText