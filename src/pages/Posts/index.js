import { Link } from "react-router-dom";
import './index.scss'

export default function Posts() {
    return (
        <main className='page-posts'>
        <header>
            <div className="esquerda-he">
                <img width="150px" height="140px" src="./images/image 26.png"/>
                <h4> PETGUARDIAN </h4>
            </div>


            <div className="direita-he">
                <a className="link" href="gerenciar.html"> Gerenciar Posts </a>
            </div>
        </header>

        <section className="faixa1">
            <div className="esquerda">
                <h1> Informações do Post </h1>
                <div className="import">
                    <h2> Importar Arquivo </h2>
                </div>

                <div className="info">
                <input className="senha" type="text" placeholder="NOME"/>
                <input className="senha" type="text" placeholder="RAÇA" />
                <input className="senha" type="text" placeholder="LOCALIZAÇÃO" />
                <input className="senha" type="text" placeholder="MEIO DE CONTATO" />
                </div>
            </div>  

            <div className="direta">
                <h1 className="titulo"> Pré visualização </h1>
                <div className="post2">

                    <div className="carol">
                        <h1> João Carlos </h1>
                    </div>

                    <div className="imgn">
                        <img width="500px" src="./images/image 13.png"/>
                    </div>

                    <div className="info-1">
                        <h1> Gato Sphynx muito fofo </h1>
                    </div>
                    <div className="infos">
                        <div className="esq-1">
                            <p> Logan </p>
                            <p> São José </p>
                            <div className="foto-1">
                                <img width="50px" src="./images/Instagram.png"/>
                                <h6> @xzx </h6>
                            </div>
                        </div>

                        <div className="dir-1">
                            <p> Sphynx </p>
                            <p> Macho </p>
                            <div className="info-2">
                                <input className="quadrado" type="checkbox"/>
                                <h1 className="input"> Interessado </h1>
                            </div>
                        </div>

                    </div>

                    <div>


                    </div>
                </div>

            </div>
        </section>
    </main>
    );
}