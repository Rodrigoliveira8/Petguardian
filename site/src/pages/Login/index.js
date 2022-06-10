import axios from 'axios'

import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Link } from "react-router-dom";
import './index.scss'
import { useState } from 'react';

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
   

        async function CadastrarClick(){

            const r = await axios.post('http://localhost:5000/usuario/login', {
                email: email,
                senha: senha
                

        })
        toast.dark('Logado com sucesso ✔️')

          }
          
    return (
        <main className="page-login">
            <ToastContainer />
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
                        <input className="users" type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    </div>

                    <div class="input-senha">
                        <input className="senha" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
                    </div>
                   

                    <div className="conect">
                        <Link onClick={CadastrarClick} className="link" to='/Feed'> Conectar </Link>
                    </div>
                    <p className="cadastro"> Ainda não tem uma conta? <span class="cad"> <Link to='/Cadastro'>Cadastre-se </Link></span> </p>
                </div>

            </section>/
        </main>
    );
}