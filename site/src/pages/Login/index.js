import { Link } from "react-router-dom";
import './index.scss'

export default function Login() {
    return (
        <main className="page-login">
            <section className="faixa">

                <div className="Esquerda">
                    <div>
                        <div className="Teste">
                            <img width="180px" src="./images/image 26.png" />
                        </div>
                        <p> Amor não se compra, amor se <span class="conqu"> conquista. </span> </p>
                    </div>
                    <div className="dog">

                    </div>

                </div>

                <div className="Direita">
                    <h1> Conecte-se em sua conta </h1>
                    <div className="input-users">
                        <input className="users" type="text" placeholder="Nome de usuário" />
                    </div>

                    <div class="input-senha">
                        <input className="senha" type="text" placeholder="Senha" />
                    </div>
                    <div class="bolinha">

                        <input className="radio" type="radio" />
                        <h6> Lembrar de mim </h6>

                    </div>

                    <div className="conect">
                        <Link className="link" to='/Feed'> Conectar </Link>
                    </div>
                    <p className="cadastro"> Ainda não tem uma conta? <span class="cad"> <Link to='/Cadastro'>Cadastre-se </Link></span> </p>
                </div>

            </section>/
        </main>
    );
}