
import LoadingBar from 'react-top-loading-bar'
import { EfetuarCadastro } from '../../api/UsuarioAPI'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import './index.scss'
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
    
    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('usuario-logado')){
            navigate('/feed')
        }
    } ,[])


        async function CadastrarClick(){
            
            setCarregando(true);

            try {
                const r = await EfetuarCadastro(nome, email, senha, nascimento, telefone, endereco);
                console.log(r);
                storage('usuario-logado', r)    
                toast.dark('Cadastrado com sucesso ✔️')

                setTimeout(() => {
                    navigate('/login')
                }, 3000)
            } 
            catch (err) {
            if (err.message.status === 400) { 
                setErro(err.response.data.Erro)
            }
            }
            

          }

    return (
        
        <main className="page-cadastro">
            <section class="sec-1">
                <img class="logo-sec1" src="./images/Logo.png.crdownload" alt="" />
                <h1 class="h1-sec1">Amor de verdade não se <br /> compra, se encontra.</h1>
                <img class="img-cat" src="./images/Gatão.png" alt="" />
            </section>
            <section class="sec-2">
                <h1 class="h1-divs">Criar nova conta</h1>
                <div class="div-cadastro2">
                    <img class="male" src="./images/User Male.png" alt="" />
                    <input class="input-cadastro" type='text' value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome de usuário" />
                </div>
                <div class="div-cadastro2">
                    <img class="calendario" src="./images/Calendáro.png" alt="" />
                    <input class="input-cadastro" type='date' value={nascimento} onChange={e => setNascimento(e.target.value)} placeholder="Nascimento" />
                </div>
                <div class="div-cadastro2">
                    <img class="map-marker" src="./images/Map Marker.png" alt="" />
                    <input class="input-cadastro" type='text' value={endereco} onChange={e => setEndereco(e.target.value)} placeholder="Endereço" />
                </div>
                <div className='div-cadastro2'>
                    <img className="telefone" src='./images/telefone.png' alt=""/>
                    <input className="input-cadastro" type='number' value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Telefone"/>
                </div>
                <div class="div-cadastro2">
                    <img class="mail" src="./images/Mail.png" alt="" />
                    <input class="input-cadastro" type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="Endereço de Email" />
                </div>
                <div class="div-cadastro2">
                    <img class="key" src="./images//Key.png" alt="" />
                    <input class="input-cadastro" type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
                </div>
                <div>
                    {erro}
                </div>
                <div class="div-cadastrar">
                    <button onClick={CadastrarClick} class="bot-cadastrar" disabled= {carregando} >Cadastrar</button>
                </div>
                <p class="entrar-cad">Já tem uma conta? <Link to='/Login' >Entrar</Link></p>
            </section>
        </main> 
    );
}