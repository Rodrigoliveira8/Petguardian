import { EfetuarLogin } from '../../api/UsuarioAPI'
import { useNavigate } from 'react-router-dom';



import { Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from 'react';
import './index.scss'

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();


    async function entrarClick() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await EfetuarLogin(email, senha)

            setTimeout(() => {
                navigate('/feed')
            }, 3000)


        }
        catch (err) {
            ref.current.complete()
            setCarregando(false)
            if (err.message.status === 401) {
                setErro(err.response.data.Erro)
            }

        }


    }



    return (
        <main className="page-login">
            <LoadingBar color='#000' ref={ref} />

            <section className="faixa">

                <div className="Esquerda">
                    <div>
                        <div className="Teste">
                            <img className="logo-casinha" width="180px" src="./images/image 26.png" />
                        </div>
                        <p> Amor não se compra, amor se conquista!</p>
                    </div>
                    <div className="dog">

                    </div>

                </div>

                <div className="Direita">
                    <h1> Conecte-se em sua conta </h1>
                    <div className="input-users">
                        <input className="users" type="email " placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div class="input-senha">
                        <input className="senha" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    </div>


                    <div className="conect">
                        <button className="link" onClick={entrarClick} disabled={carregando}> Conectar </button>

                    </div>
                    <div className="conect">
                        {erro}
                    </div>
                    <p className="cadastro"> Ainda não tem uma conta? <span class="cad"> <Link to='/Cadastro'>Cadastre-se </Link></span> </p>
                </div>


            </section>/
        </main>
    );
}