import './Form.css'
import InputText from '../InputText'
import List from '../List'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [gender, setGender] = useState('')





    const save = (event) => {
        event.preventDefault()
        props.aRegisteredGame({
            name,
            description,
            img,
            gender
        })
        setName('')
        setDescription('')
        setImg('')
        setGender('')
    }

    return (

        <section className='form'>
            <form onSubmit={save}>
                <h1 className='title'>Listagem de novos jogos</h1>
                <InputText
                    required={true}
                    label='Nome do jogo'
                    value = {name}
                    setChanged = {value => setName(value)}
                />
                <InputText
                    required={true}
                    label='Descrição do jogo'
                    value= {description}
                    setChanged={description => setDescription(description)}
                />
                <InputText
                    label='Imagem do jogo'
                    value={img}
                    setChanged={img => setImg(img)}
                />
                <List
                    label='Escolha o genero do jogo'
                    items={props.listGender}
                    value={gender}
                    setChanged={value => setGender(value)}
                />
                <Button
                    nameButton='Criar Card'
                />
                <br></br>
            </form>
        </section>
    )
}

export default Form