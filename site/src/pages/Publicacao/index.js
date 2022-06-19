import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListarPostsUsuario } from "../../api/PostAPI";
import storage from 'local-storage'
import './index.scss';




export default function Publicacao(){
    const [post, setPost] = useState([]);

    async function teste (){
        const IdUsuario = storage('usuario-logado').id;
        const resp = await ListarPostsUsuario(IdUsuario);
        setPost(resp)
    }

    useEffect(() => {
        teste();
    }, [])




    return(
        <main class="page-publi">
            <header>
                <div className="esquerda-he">
                    <img src="./images/image 26.png"/>
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
                                </tr>
                                
                                )}
                            
                            
                          
                        </tbody>
                    </table>
                    
                </div>
            </div>
             
        </main>     
    )
}   