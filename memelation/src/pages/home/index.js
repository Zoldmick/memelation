import React,{ useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { ToastContainer, toast } from 'react-toastify'
import memelation from '../../services/memelation'
import Card from '../../components/card'
import { Link } from 'react-router-dom'
import Validate from '../../components/validateAge'
import "react-multi-carousel/lib/styles.css"
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

    const consultClick = async () => {
        try{
            const con = await api.consult()
            setReq([...con])

        }
        catch(e){
            toast.error(e.response.data.erro)
        }
    }

    useEffect(() => {
        consultClick()
    },[])    

    return(
        <div>
            <ToastContainer />
            <h1>Consultar</h1>
            <Carousel responsive={responsive}>
                {req.filter(x => !x.maior).map(x =>                 
                    <div>
                        <img src={api.getPhoto(x.imagem)} alt=""/>
                    </div> 
                )}
            </Carousel>
            <Link to='/adultMeme' onClick={() => Validate}>Pagina de memes adultos</Link>
        </div>
    )
}