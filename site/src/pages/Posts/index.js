import './index.scss'

import { useNavigate } from 'react-router-dom'

import {useEffect, useState} from 'react'

import { cadastraPet, EnviarImagem } from '../../api/PostAPI'

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
        
    async function SalvarClick(){
        try{
            const usuario = storage('usuario-logado').id;
            const r = await cadastraPet(nome,raca,localizacao,contato,sexo,usuario);
            console.log(r)

            alert("foi")
        }
        catch(err){
            alert(err.message)
        }
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
                    <div className="import">
                        <h2> Importar Arquivo </h2>
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
                            <h1> João Carlos </h1>
                        </div>

                        <div className="imgn">
                            <img className="img-post" src="./images/image 13.png"/>
                        </div>

                        <div className="info-1">
                            <h1> Gato Sphynx muito fofo </h1>
                        </div>
                        <div className="infos">
                            <div className="esq-1">
                                <p> {nome} </p>
                                <p> {localizacao} </p>
                                <div className="foto-1">
                                    <img width="30vw" src="./images/Instagram.png"/>
                                    <h6> {contato} </h6>
                                </div>
                            </div>

                            <div className="dir-1">
                                <p> {raca} </p>
                                <p> {sexo} </p>
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