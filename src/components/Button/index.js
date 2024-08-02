import './Button.css'

const Button = (props) =>{
    return(
        <div>
            <button className='button'>{props.nameButton}</button>
        </div>
        
    )
}

export default Button