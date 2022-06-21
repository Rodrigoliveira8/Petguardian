import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListarPostsUsuario, DeletarPost } from "../../api/PostAPI";
import storage from 'local-storage'
import './index.scss';
import { confirmAlert } from 'react-confirm-alert'
import  { toast } from 'react-toastify'


export default function Publicacao(){
    const [post, setPost] = useState([]);
    const navigate = useNavigate('');

    async function teste (){
        const IdUsuario = storage('usuario-logado').id;
        const resp = await ListarPostsUsuario(IdUsuario);
        setPost(resp)
    }

    useEffect(() => {
        teste();
    }, [])


async function ExcluirPost (id,nome){

    confirmAlert({
        title: "REMOVER POST",
        message: `Deseja remover o Post ${nome}?`,
        buttons: [
            {
                label:'Sim',
                onClick: async () => {
                    const resposta = await DeletarPost (id,nome);
                    teste()
                    toast.dark("Post Removido!")
                }
            },
            {
                label:'Não'
            }
        ]
    })

    
}

function editarPost (id){
    navigate(`/alterar/${id}`);
}

function Lp(){
    navigate('/Lp')
}


    return(
        <main class="page-publi">
            <header>
                <div className="esquerda-he">
                    <img src="./images/image 26.png" onClick={() => Lp()}/>
                    <h4> PETGUARDIAN </h4>
                </div>
                <div className="direita-he">
                    <Link className="link" to='/Feed'>
                        Feed
                    </Link>
                </div>
                
            </header>
            <div className='container'>
                
                <div className='conteudo'>


                    <table>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Nome</th>
                                <th>Interessados</th>
                                <th>Raça</th>
                                <th>Localização</th>
                                <th> Sexo </th>
                                <th> Meio de Contato </th>
                                <th> Opções </th>
                            </tr>
                        </thead>
                        <tbody>
                            {post.map(item =>
                                
                                <tr>
                                    <td>{item.Titulo}</td>
                                    <td>{item.NomePet}</td>
                                    <td>Undefined</td>
                                    <td>{item.Raca}</td>
                                    <td>{item.Localizacao}</td>
                                    <td>{item.Sexo} </td>
                                    <td> {item.Contato} </td>
                                    <td>
                                        <img src='./images/icons8-lixo-24.png' onClick={ () => ExcluirPost(item.id, item.NomePet)}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img src ='./images/canetinha.png' onClick={() => editarPost (item.id)}/>
                                    </td>
                                </tr>
                                
                                )}
                            
                            
                          
                        </tbody>
                    </table>
                    
                </div>
            </div>
             
        </main>     
    )
}   