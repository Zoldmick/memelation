import React,{ useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { ToastContainer, toast } from 'react-toastify'
import memelation from '../../services/memelation'
import Card from '../../components/card'
import "react-multi-carousel/lib/styles.css"
import { Link } from 'react-router-dom'
const api = new memelation()

export default function HomePage(){
    const [req,setReq] = useState([])
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }

    const consultClick = () => {
        try{
            const con = api.consult()
            setReq([...con])
        }
        catch(e){
            if(e.response.data.erro) toast.error(e.response.data.erro)
            else toast.error("Algo deu errado. Tente de novo mais tarde.")
        }
    }

    useEffect(() => {
        consultClick()
    },[])    

    return(
        <div>
            <ToastContainer />
            <h1>Oi</h1>
            <Carousel responsive={responsive}>
                {req.filter(x => !x.maior).map(x => 
                    <Card imagem={x.imagem}
                    categoria={x.categoria}
                    hashtags={x.hashtags}
                    autor={x.autor}
                    alt={x}/>
                )}
            </Carousel>
            <Link to='/'>Voltar a pagina inicial</Link>
        </div>
    )
}