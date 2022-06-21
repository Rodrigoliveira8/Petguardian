import './index.scss'

import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'


import { toast } from 'react-toastify'

import { useParams } from 'react-router-dom'

import { cadastraPet, enviarimagem, AlterarPet, buscarPorId, buscarimagem } from '../../api/PostAPI.js'

import storage, { set } from 'local-storage'


export default function Posts() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/Login');
        }
    }, [])

    const [titulo, SetTitulo] = useState('');
    const [nome, Setnome] = useState('');
    const [raca, Setraca] = useState('');
    const [localizacao, Setlocalizacao] = useState('');
    const [contato, Setcontato] = useState('');
    const [sexo, setSexo] = useState('');
    const [img, SetImg] = useState();
    const UserLogado = storage('usuario-logado').Nome;
    const [id, SetId] = useState(0);


    const { idParam } = useParams();

    useEffect(() =>{    
        if(idParam){
            carregarPost();
        }
    }, [])

   async function carregarPost(){
        const resposta = await buscarPorId(idParam);
        SetId(resposta.id)
        Setnome(resposta.nome)
        SetImg(resposta.imagem)
        Setraca(resposta.raca)
        SetTitulo(resposta.titulo)
        Setlocalizacao(resposta.localizacao)
        setSexo(resposta.sexo)
        Setcontato(resposta.contato)
        
        
        
    }

    async function SalvarClick() {
        try {
            if (!img) throw new Error("Escolha a imagem do Post")

            const usuario = storage('usuario-logado').id;
            console.log(usuario)

            if (id === 0) {

                const NovoPost = await cadastraPet(nome, raca, localizacao, contato, sexo, usuario, titulo)
                const r = await enviarimagem(NovoPost.id, img)
                toast.dark("O pet foi cadastrado 🐶")

                SetId(NovoPost.id);
            }

            else {
                await AlterarPet(idParam, nome, raca, localizacao, contato, sexo, usuario, titulo)
                 await enviarimagem(idParam, img)

                if (typeof(img) == 'object')
                toast.dark("O pet foi Alterardo 🐶")

            }




        }
        catch (err) {
            if (err.response)
                toast.dark(err.response.data.Erro)
            else {
                toast.dark(err.message)
            }
        }
    }

    function escolherimg() {
        document.getElementById('imgpet').click();
    }

    function mostrarImagem() {
        if(typeof (img) == 'object'){ 
        return URL.createObjectURL(img);
        } 
        else {
            return buscarimagem(img)
        }
    }


    function NovoClick() {
        SetId(0);
        setSexo('');
        Setnome('');
        SetImg();
        SetTitulo('');
        Setraca('');
        Setlocalizacao('');
        Setcontato('');
    }



    return (
        <main className='page-posts'>
            <header>
                <div className="esquerda-he">
                    <img className="logo-img" src="./images/image 26.png" />
                    <h4> PETGUARDIAN </h4>
                </div>
            <div className='dir '>
                <a href="/Feed">
                    <span className='oi'>
                        <button className="feed-d">
                            Feed
                        </button>
                    </span>
                </a>
                <a href='/Publicacao'>
                    <button className="feed-d">
                            Meus Post
                    </button>
                </a>
            </div>
            </header>

            <section className="faixa1">
                
                    <div className="esquerda">
                        <h1> Informações do Post </h1>
                        <div className="import" onClick={escolherimg}>
                            <h2> Importar Arquivo </h2>
                            <input type='file' id='imgpet' onChange={e => SetImg(e.target.files[0])} />
                        </div>

                        <div className="info">
                            <input data-ls-module="charCounter" maxlength="20" className='senha' type='text' placeholder="Título" value={titulo} onChange={e => SetTitulo(e.target.value)} />
                            <input data-ls-module="charCounter" maxlength="10" className="senha" type="text" placeholder="Nome" value={nome} onChange={e => Setnome(e.target.value)} />
                            <input data-ls-module="charCounter" maxlength="20" className="senha" type="text" placeholder="Raça" value={raca} onChange={e => Setraca(e.target.value)} />
                            <input data-ls-module="charCounter" maxlength="15" className="senha" type="text" placeholder="Localização" value={localizacao} onChange={e => Setlocalizacao(e.target.value)} />
                            <input data-ls-module="charCounter" maxlength="5" className="senha" type="text" placeholder="Sexo" value={sexo} onChange={e => setSexo(e.target.value)} />
                            <input data-ls-module="charCounter" maxlength="16" className="senha" type="text" placeholder="Meio de Contato" value={contato} onChange={e => Setcontato(e.target.value)} />
                        </div>
                        
                    </div>
                

                <div className="direta">
                    <h1 className="titulo"> Pré visualização </h1>
                    <div className="post2" >

                        <div className="carol">
                            <h1> {UserLogado} </h1>
                        </div>
                        <div className="imgn">
                            {!img &&
                                <img className='img-post' src='./images/a.png' alt='' />
                            }
                            {img &&
                                <img className='img-post' src={mostrarImagem()} alt='' />
                            }
                        </div>

                        <div className="info-1">
                            {!titulo &&

                                <h1>Título </h1>
                            }
                            {titulo &&
                                <h1> {titulo} </h1>
                            }
                        </div>
                        <div className="infos">
                            <div className="esq-1">
                                {!nome &&
                                    <p> Nome </p>
                                }
                                {nome &&
                                    <p> {nome} </p>
                                }
                                {!localizacao &&
                                    <p> Localização </p>
                                }
                                {localizacao &&
                                    <p> {localizacao} </p>
                                }
                                <div className="foto-1">
                                    <img width="30vw" src="./images/contato.png" />
                                    
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
                                    <p id='p1'> {raca} </p>
                                }
                                {!sexo &&

                                    <p className='p1'> Sexo </p>

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
                        <button onClick={SalvarClick} className='botao'> {id === 0 ? 'Salvar' : 'Alterar'} </button> &nbsp; &nbsp;
                        <button onClick={NovoClick}> NOVO </button>
                    </div>
            </section>

        </main>

    );
}