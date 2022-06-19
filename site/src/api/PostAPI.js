import axios from "axios";
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastraPet(nome, raca, localizacao, contato, sexo, usuario,titulo){
    const respota = await api.post('/post/criar', {
        titulo: titulo,
        usuario:usuario,
        nome:nome,
        raca: raca,
        localizacao:localizacao,
        sexo:sexo,
        contato:contato
    })
    return respota.data;

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




export async function AlterarPet(id, nome, raca, localizacao, contato, sexo, usuario,titulo){
    const respota = await api.put(`/usuario/post/${id}`, {
        titulo: titulo,
        usuario:usuario,
        nome:nome,
        raca: raca,
        localizacao:localizacao,
        sexo:sexo,
        contato:contato
    })
    return respota.data;

}

export async function ListarTodosPosts(){
    const resposta = await api.get('/feed');
    return resposta.data;
}


export async function ListarPostsUsuario (id){
    const resposta = await api.get(`/usuario/${id}/post`);
    return resposta.data;
}

export async function AtualizarInteresse (id){
    const resposta = await api.put(`/interessa/${id}`);
    return resposta.data;
}