import './index.scss'

import { useNavigate } from 'react-router-dom'

import {useEffect, useState} from 'react'


import { toast } from 'react-toastify'


import { cadastraPet, enviarimagem } from '../../api/PostAPI'

import  storage from 'local-storage'


export default function Posts() {
    const navigate = useNavigate();
    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/Login');
        }
    }, [])


    const [nome, Setnome] = useState('');
    const [raca, Setraca] = useState('');
    const [localizacao, Setlocalizacao] = useState('');
    const [contato, Setcontato] = useState('');
    const [sexo, setSexo] = useState('');
    const [img, SetImg] = useState();
    const UserLogado = storage('usuario-logado').nome;

    async function SalvarClick(){
        try{
            if(!img) throw new Error("Escolha a imagem do Post")

            const usuario = storage('usuario-logado').id;
            
            const NovoPost = await cadastraPet(nome,raca,localizacao,contato,sexo,usuario)
            const r = await enviarimagem (NovoPost.id, img)

             
            toast.dark("O pet foi cadastrado 🐶")
        }
        catch(err){
            if(err.response)
            toast.dark(err.response.data.Erro)
            else{
                toast.dark(err.message)
            }
        }
    }

    function escolherimg (){
        document.getElementById('imgpet').click();
    }

  function mostrarImagem(){
        return URL.createObjectURL(img);
  }
    return (
        <main className='page-posts'>            
            <header>
                <div className="esquerda-he">
                    <img className="logo-img" src="./images/image 26.png"/>
                    <h4> PETGUARDIAN </h4>
                </div>

                <a href="/Feed">
                    <button className="feed-d">
                        Feed
                    </button>
                </a>
            </header>

            <section className="faixa1">
                <div className="esquerda">
                    <h1> Informações do Post </h1>
                    <div className="import" onClick={escolherimg}>
                        <h2> Importar Arquivo </h2>
                        <input type='file' id='imgpet' onChange={e => SetImg (e.target.files[0])}  />
                    </div>

                    <div className="info">
                    <input className="senha" type="text" placeholder="NOME" value={nome} onChange = {e => Setnome(e.target.value)}/>
                    <input className="senha" type="text" placeholder="RAÇA" value={raca} onChange = {e => Setraca(e.target.value)}/>
                    <input className="senha" type="text" placeholder="LOCALIZAÇÃO" value={localizacao} onChange = {e => Setlocalizacao(e.target.value)}/>
                    <input className="senha" type="text" placeholder="MEIO DE CONTATO"value={contato} onChange = {e => Setcontato(e.target.value)} />
                    <input className="senha" type="text" placeholder="Sexo"value={sexo} onChange = {e => setSexo(e.target.value)} />
                    </div>
                </div>  

                <div className="direta">
                    <h1 className="titulo"> Pré visualização </h1>
                    <div className="post2">

                        <div className="carol">
                            <h1> {UserLogado} </h1>
                        </div>
                        <div className="imgn">
                            {!img && 
                            <img className='img-post' src='./images/image 13.png' alt=''/>
                            }
                            {img &&
                            <img className='img-post' src={mostrarImagem()} alt=''/>
                            }   
                        </div>

                        <div className="info-1">
                            <h1> Gato Sphynx muito fofo </h1>
                        </div>
                        <div className="infos">
                            <div className="esq-1">
                                    {!nome &&
                                    <p> Nome </p>
                                    }
                                    {nome &&
                                    <p> {nome} </p>
                                    }
                                    {! localizacao &&
                                    <p> Localização </p> 
                                    }
                                    {localizacao &&
                                <p> {localizacao} </p>
                                    }
                                <div className="foto-1">
                                    <img width="30vw" src="./images/Instagram.png"/>
                                    {!contato &&
                                    <h6> Contato </h6>
                                    }
                                    {contato &&
                                    <h6> {contato} </h6>
                                    }
                                </div>
                            </div>

                            <div className="dir-1">
                                {!raca &&
                                <p>  Raça</p>
                                }
                                {raca &&
                                <p> {raca} </p>
                                }
                                {!sexo &&
                                
                                <p> Sexo </p>

                                }
                                {sexo &&
                                <p> {sexo} </p>
                                }   
                                <div className="info-2">
                                   
                                </div>
                                
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                                        <button onClick={SalvarClick} className='botao'> Salvar </button>
                                    </div>
            </section>
        </main>
    );
}