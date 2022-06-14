import axios from "axios";
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastraPet(nome, raca, localizacao, contato, sexo, usuario){
    const respota = await api.post('/post/criar', {
        usuario:usuario,
        nome:nome,
        raca: raca,
        localizacao:localizacao,
        sexo:sexo,
        contato:contato
    })
    

}

 
export async function enviarimagem (id, imagem){
    const formData = new FormData();
    formData.append('imgpet', imagem);
    
    const resposta = await api.put(`/post/${id}/imagem` , formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}
