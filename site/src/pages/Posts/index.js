import './index.scss'
import {useState} from 'react'

export default function Posts() {
    const [nome, Setnome] = useState('');
    const [raca, Setraca] = useState('');
    const [localizacao, Setlocalizacao] = useState('');
    const [contato, Setcontato] = useState('');

    async function SalvarClick (){
        try {

        } catch (err) {
            
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
                                <p> Logan </p>
                                <p> São José </p>
                                <div className="foto-1">
                                    <img width="30vw" src="./images/Instagram.png"/>
                                    <h6> @xzx </h6>
                                </div>
                            </div>

                            <div className="dir-1">
                                <p> Sphynx </p>
                                <p> Macho </p>
                                <div className="info-2">
                                    <input className="quadrado" type="checkbox"/>
                                    <h1 className="input"> Interessado </h1>
                                    <div>
                                        <button onClick={SalvarClick}> Salvar </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}