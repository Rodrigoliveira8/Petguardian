import axios from 'axios'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { ListarTodosPosts, AtualizarInteresse } from '../../api/PostAPI'



import { Link } from "react-router-dom";
import './index.scss'
import { useEffect, useState } from 'react';

export default function Feed() {
    const [post, setPost] = useState([])
    const [teste, SetTeste] = useState(false);

    if(teste === true){
        const IdPost = storage('usuario-logado').id;
        AtualizarInteresse(IdPost)
    }


    const navigate = useNavigate()

    function sairClick(){
        storage.remove('usuario-logado');
        navigate('/Login');
    }
   

       async function CarregarTodosPosts (){
            const resp = await ListarTodosPosts();
            setPost(resp);
        }

        useEffect (() => {
            CarregarTodosPosts();
        }, []);

        function Lp (){
            navigate('/LP')
        }
        

    return (
        <main className="page-feed">
            <header>
                <div className="esquerda-he">
                    <img src="./images/image 26.png" onClick={() => Lp()}/>
                        <h4> PETGUARDIAN </h4>
                </div>
            <div className='teste'> 
            
                <div className="direita-he">
                    <a href="/Posts">
                        <button className="login-gerenciar">
                            Criar Posts
                        </button>
                    </a>
                </div>
                <div className='ooi' onClick={sairClick}>  
                    <a href='/login'> 
                    <button className='login-gerenciar'> Sair </button>
                    </a>
                </div>
            </div>
            </header>

            <section className="faixa-1">
                <div className='feed'> 

                
                {post.map(item =>

                    <div key= {item.id} className="post1">

                    <div className="carol">
                        <h1> {item.usuario} </h1>
                    </div>

                    <div>
                        <img className="imgn" src= {`http://localhost:5000/${item.Imagem}`} />
                    </div>

                    <div className="info-1">
                        <h1>{item.titulo} </h1>
                    </div>
                    <div className="infos">
                        <div className="esq-1">
                            <p> {item.NomePet} </p>
                            <p> {item.Localizacao} </p>
                            <div className="foto-1">
                                <img width="30px" height='30px' src="./images/Instagram.png"/>
                                    <h6>{item.Contato} </h6>
                            </div>
                        </div>

                        <div className="dir-1">
                            <p> {item.Raca} </p>
                            <p> {item.Sexo} </p>
                            <div className="info-2">
                                <input className="quadrado" type="checkbox" checked={teste} onChange={e => SetTeste(e.target.checked)} />
                                    <h1 className="input" > Interessado </h1>
                            </div>
                        </div>

                    </div>

                    <div>


                    </div>

                </div>
                    
                    
                    
                )}

                        
                       
                </div>        


            </section>

        </main>
    );
}