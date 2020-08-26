import axios from 'axios'

const memelation = axios.create({
    baseURL:'https://nsf-lista-negra.herokuapp.com'
})

export default class api{
    async consult(){
        const resp = await memelation.get(`/memelation`)
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
        const resp = await memelation.put(`/memelation/${id}`,mm)
        return resp.data
    }
    getPhoto(nome){
        return memelation.defaults.baseURL + `/memelation/foto` + nome
    }
}