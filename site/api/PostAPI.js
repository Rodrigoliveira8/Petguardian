import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastraPet(nome, raca, localizacao, meiodecontato, usuario, sexo, descricao){
    const respota = await api.post('/post/criar', {
    usuario: usuario,
    nome: nome,
    raca: raca,
    localizacao:localizacao ,
    sexo: sexo,
    desc: descricao,
    contato:meiodecontato
    })
    return respota.data;
}
export async function EnviarImagem (id, imagem){
    const formData = new FormData();;
    const resposta = await api.put(`/post/${id}/imagem` , formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        }
    });
    return resposta.status;
}