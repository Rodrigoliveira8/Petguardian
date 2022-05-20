import { Link } from "react-router-dom";
import './index.scss'

export default function Feed() {
    return (
        <main className="page-feed">
            <header>
                <div className="esquerda-he">
                    <img width="150px" height="140px" src="./images/image 26.png"/>
                        <h4> PETGUARDIAN </h4>
                </div>


                <div className="direita-he">
                <Link className="link" to='/'>
                        Login
                    </Link>
                    <Link className="link" to='/Posts'> Gerenciar Posts </Link>
                </div>
            </header>

            <section className="faixa-1">

                <div className="post1">

                    <div className="carol">
                        <h1> Carol Fernanda </h1>
                    </div>

                    <div className="imgn">
                        <img width="500px" src="./images/image 5.png"/>
                    </div>

                    <div className="info-1">
                        <h1> Coelho bege de 2 anos de idade  </h1>
                    </div>
                    <div className="infos">
                        <div className="esq-1">
                            <p> Cleber </p>
                            <p> São José </p>
                            <div className="foto-1">
                                <img width="70px" height='70px' src="./images/Instagram.png"/>
                                    <h6> @xzx </h6>
                            </div>
                        </div>

                        <div className="dir-1">
                            <p> Rex </p>
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
                <div className="post2">

                    <div className="carol">
                        <h1> João Carlos </h1>
                    </div>

                    <div className="imgn">
                        <img width="500px" src="./images/image 13.png"/>
                    </div>

                    <div className="info-1">
                        <h1> Gato Sphynx muito fofo  </h1>
                    </div>
                    <div className="infos">
                        <div className="esq-1">
                            <p> Logan </p>
                            <p> São José </p>
                            <div className="foto-1">
                                <img width="70px" height='70px' src="./images/Instagram.png"/>
                                    <h6> @xzx </h6>
                            </div>
                        </div>

                        <div className="dir-1">
                            <p> Sphynx </p>
                            <p> Macho </p>
                            <div className="info-2">
                                <input class="quadrado" type="checkbox"/>
                                    <h1 className="input"> Interessado </h1>
                            </div>
                        </div>

                    </div>

                    <div>


                    </div>
                </div>


            </section>

        </main>
    );
}