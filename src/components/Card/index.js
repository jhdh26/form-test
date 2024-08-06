import './Card.css'

const Card = ({ name, description, img, headerColor}) =>{
    return(
        <div className='card'>
            <div className='header' style={{backgroundColor: headerColor}}>
                <img src={img} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    )
}

export default Card