import React from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import memelation from '../../services/memelation'
const api = new memelation()

export default function Delete(props){
    const his = useHistory()
    const deleteClick = () => {
        try{
            api.delete(props.location.state.id)
            his.goBack()
        }
        catch(e){
            if(e.response.data.erro) toast.error(e.response.data.erro)
            else toast.error('Algo deu errado. Tente novamente')
        }
    }
    const deleteFakeClick = () => his.goBack()

    return(
        <div>
            <ToastContainer />
            <h1>Pagina de excluir</h1>
            <h2>Deseja realmente excluir?</h2>
            <button onClick={deleteClick}>SIM</button>
            <button onClick={deleteFakeClick}>NÃO</button>
        </div>
    )
}