import axios from 'axios'


import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import './index.scss'
import { useState, useRef } from 'react';

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();
    const ref = useRef();
   

        async function CadastrarClick(){
            ref.current.continuousStart();
            try{
            const r = await axios.post('http://localhost:5000/usuario/login', {
                email: email,
                senha: senha
            
        });

                setTimeout(() => {
                    navigate('/Feed');
                }, 3000)            
                
            
    }   catch(err){
        ref.current.complete();
        if(err.response.status === 401) {
            setErro(err.response.data.Erro)
        }
    }
        

          }
          
    return (
        <main className="page-login">
            <LoadingBar color='#f119646' ref={ref} />
            
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
                        <button className="link" onClick={CadastrarClick}> Conectar </button>
                       
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