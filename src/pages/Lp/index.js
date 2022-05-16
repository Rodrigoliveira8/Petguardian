import './index.scss'
import { Link } from 'react-router-dom';

export default function Lp() {
    return (
        <main className="page-lp">
            <header className="header-feed">
                <div className="div1-feed">
                    <img className="img1-feed" src="./images/Logo.png" alt="Logo Casinha" />
                    <p className="p1-feed">
                        PETGUARDIAN
                    </p>
                </div>
                <div className="div2-feed">
                    <Link className="p2-feed" to='/Login'>
                        Login
                    </Link>

                </div>
            </header>
            <section className="faixa1">

                <h1>Seu futuro companheiro precisa de você! Adote!</h1>
                <Link to= '/Feed'>Acesse o feed</Link>
            </section>
            <section className="faixa2">
                <div className="f2-title-img">
                    <h1>Um pouco sobre nós</h1>
                    <img src="./images/gatineo.png" />
                </div>
                <div className="f2-txt">
                    <p>A PETGUARDIAN é o principal meio de você encontrar um pet para cuidar, ou, para você doar.</p>
                    <p>Através da PETGUARDIAN <span> você pode salvar a vida </span> de  animais de rua que só precisa de um carinho e uma moradia. </p>
                    <p>Aqui é possível doar um pet para quem realmente vai amá-lo!</p>
                </div>
            </section>
            <section className="faixa3">
                <div className="f3-img">
                    <img height="375px" src="./images/cel-note.png" />
                </div>
                <div className="f3-text">
                    <h1>Multiplataformas</h1>
                    <p>Acesse o nosso site do conforto do seu computador ou na palma da sua mão. Podendo continuar de onde parou em outro dispositivo com a sincronização de contas.</p>
                </div>
            </section>
            <section className="faixa4">
                <div className="f4-title">
                    <h1>Veja como é simples para começar a navegar pelo PETGUARDIAN</h1>
                </div>
                <div className="f4-steps">
                    <div>
                        <img src="./images/1.png" />
                        <p>Acesse o nosso site</p>
                    </div>
                    <div>
                        <img src="./images/2.png" />
                        <p>Faça login ou crie uma conta</p>
                    </div>
                    <div>
                        <img src="./images/3.png" />
                        <p>Pronto! Você já pode navegar pelo nosso feed e ver quais fofuras esperam por você!</p>
                    </div>
                </div>
                <div className="f4-cadastre">
                    <h1>O que está esperando? <a href="">Cadastre-se</a> agora!</h1>
                </div>
            </section>
            <footer>
                <div className="div1-footer">
                    <img src="./images/Logo.png" alt="Logo Casinha" />
                    <p className="p1-feed">
                        PETGUARDIAN
                    </p>
                </div>
                <div className="f-text">
                    <p>Entre em contato:</p>
                    <p>PETGUARDIAN@gmail.com</p>
                    <p>(11) 1234-5678</p>
                </div>
            </footer>
        </main>
    );
}