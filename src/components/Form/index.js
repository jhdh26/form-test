import './Form.css'
import InputText from '../InputText'
import List from '../List'
import Button from '../Button'
import { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [gender, setGender] = useState('')



    const listGender = ['FPS', 'RPG', 'MOBA']

    const save = (event) => {
        event.preventDefault()
        console.log('Form foi submetido =>', name,description,img,gender)
    }

    return (

        <section className='form'>
            <form onSubmit={save}>
                <h1 className='title'>Bem vindo.</h1>
                <InputText
                    required={true}
                    label='Nome'
                    value = {name}
                    setChanged = {value => setName(value)}
                />
                <InputText
                    required={true}
                    label='Descrição'
                    value= {description}
                    setChanged={description => setDescription(description)}
                />
                <InputText
                    label='Imagem do jogo'
                    value={img}
                    setChanged={img => setImg(img)}
                />
                <List
                    label='Escolha o tema do jogo'
                    items={listGender}
                    value={gender}
                    setChanged={gender => setGender(gender)}
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