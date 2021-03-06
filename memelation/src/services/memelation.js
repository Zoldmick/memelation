import axios from 'axios'

const memelation = axios.create({
    baseURL:'https://nsf-lista-negra.herokuapp.com'
})

export default class api{
    async consult(){
        const resp = await memelation.get("/Memelation")
        return resp.data
    }
    async delete(id){
        const resp = await memelation.delete(`/memelation/${id}`)
        return resp.data
    }
    async register(mm){
        const form = new FormData()
        form.append('autor',mm.autor)
        form.append('maior',mm.maior)
        form.append('categoria',mm.categoria)
        form.append('hashtags',mm.hashtags)
        form.append('imagem',mm.imagem)

        const resp = await memelation.post(`/memelation`,form,{
            headers: {'content-type':'multipart/form-data'}
        })
        return resp.data
    }
    async change(id,mm){
        console.log(id)
        console.log(mm)
        const resp = await memelation.put(`/memelation/${id}`,mm)
        return resp.data
    }
    getPhoto(foto) {
        const urlFoto = memelation.defaults.baseURL + "/memelation/foto/" + foto  
        console.log(urlFoto)  
        return urlFoto
      }
}