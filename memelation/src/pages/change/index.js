import React,{ useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import memelation from '../../services/memelation'
import 'react-toastify/dist/ReactToastify.css'
const api = new memelation()

export default function Change(props){
    const [autor,setAutor] = useState(props.location.state.autor)
    const [categoria,setCategoria] = useState(props.location.state.categoria)
    const [hashtags,setHashtags] = useState(props.location.state.hashtags)
    const [maior,setMaior] = useState(props.location.state.maior)

    const changeClick = async () => {
        try{
            const resp = await api.change(props.location.state.id,{
                autor:autor,
                categoria:categoria,
                hashtags:hashtags,
                maior:maior,
            })
            console.log(resp)
            toast.dark('Sucess')
        }
        catch(e){
            if(e.response.data.erro) toast.error(e.response.data.erro)
            else toast.error("Algo deu errado. Tente novamente")
        } 
    }

    return(
        <div>
            <ToastContainer />
            <h1>Alterar meme</h1>
            <div>
                <label>Autor</label>
                <input type='text' value={autor}
                onChange={e => setAutor(e.target.value)}/>
            </div>
            <div>
                <label>Categoria</label>
                <input type='text' value={categoria}
                onChange={e => setCategoria(e.target.value)}/>
            </div>
            <div>
                <label>Hashtags</label>
                <input type='text' value={hashtags}
                onChange={e => setHashtags(e.target.value)}/>
            </div>
            <div>
                <label>Maior</label>
                <input type='radio' value={maior}
                onChange={e => setMaior(e.target.checked)}/>
            </div>
            <button onClick={changeClick}>
                Salvar
            </button>
            <Link to='/'>Voltar ao menu</Link>
        </div>
    )
}
