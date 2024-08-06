import './Team.css'
import Card from '../Card'

const Time = (props) => {
    return (
        (props.games.length > 0) && <section className='team' style={{ backgroundColor: props.secondColor, }}>
            <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>
            <div className='games'>
                {props.games.map(game => <Card headerColor={props.firstColor} name={game.name} description={game.description} img={game.img} />)}
            </div>
        </section>
    )
}

export default Time