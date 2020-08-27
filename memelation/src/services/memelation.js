import axios from 'axios'

const memelation = axios.create({
    baseURL:'https://nsf-lista-negra.herokuapp.com'
})

export default class api{
    async consult(){
        const resp = await memelation.get("/Memelation")
        console.log(resp)
        return resp.data
    }
    async delete(id){
        const resp = await memelation.delete(`/Memelation/${id}`)
        return resp.data
    }
    async register(mm){
        const form = new FormData()
        form.append('autor',mm.autor)
        form.append('maior',mm.maior)
        form.append('categoria',mm.categoria)
        form.append('hashtags',mm.hashtags)
        form.append('imagem',mm.imagem)

        const resp = await memelation.post(`/Memelation`,form,{
            headers: {'content-type':'multipart/form-data'}
        })
        return resp.data
    }
    async change(id,mm){
        const resp = await memelation.put(`/Memelation/${id}`,mm)
        return resp.data
    }
    getPhoto(foto) {
        const urlFoto = memelation.defaults.baseURL + "/Memelation/foto/" + foto
        console.log(urlFoto)
    
        return urlFoto
      }
}