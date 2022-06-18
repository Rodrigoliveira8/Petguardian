import { Link } from "react-router-dom";
import './index.scss';

export default function publicacao(){
    return(
        <main class="page-publi">
            <header>
                <div className="esquerda-he">
                    <img src="./images/image 26.png"/>
                    <h4> PETGUARDIAN </h4>
                </div>
                <div className="direita-he">
                    <Link className="link" to='/Feed'>
                        Feed
                    </Link>
                </div>
            </header>
            <section className="Faixa-1">
                <div className="esquerda"> 
                    <div className="card-princ">
                    <img className="img-pets" src="./images/image 5.png"/> 
                    <div className="info-card">
                    <h1 className="h1-cards"> Nome: <span className="info-p"> Rex </span> </h1>  
                    <h1 className="h1-cards"> Raça: <span className="info-p">Vira Lata</span> </h1>  
                    <h1 className="h1-cards"> Sexo:<span className="info-p"> Macho </span> </h1>
                    <h1 className="h1-cards"> Localização: <span className="info-p"> Cidade Dutra </span> </h1>
                    <h1 className="h1-cards"> Meio de Contato: <span className="info-p"> @xyz </span> </h1>
                    <h1 className="h1-cards"> Interessados: <span className="info-p">27</span> </h1>
                    </div>                                
                    </div>
                    <div className="finally">
                        <h3> Coelho Bege de 2 anos de idade </h3>
                            <Link className="final" to='/Posts'>
                            <img src="./images/canetinha.png" />
                                Editar
                            </Link>   
                    </div>
                </div>


                <div className="esquerda"> 
                    <div className="card-princ">
                    <img className="img-pets" src="./images/image 13.png"/> 
                    <div className="info-card">
                    <h1 className="h1-cards"> Nome: <span className="info-p"> Tel </span> </h1>  
                    <h1 className="h1-cards"> Raça: <span className="info-p">Vira Lata</span> </h1>  
                    <h1 className="h1-cards"> Sexo:<span className="info-p"> Macho </span> </h1>
                    <h1 className="h1-cards"> Localização: <span className="info-p"> Cidade Dutra </span> </h1>
                    <h1 className="h1-cards"> Meio de Contato: <span className="info-p"> @xyz </span> </h1>
                    <h1 className="h1-cards"> Interessados: <span className="info-p">27</span> </h1>
                    </div>                                
                    </div>
                    <div className="finally">
                        <h3> Gato feio pra cacete </h3>
                        <Link className="final" to='/Posts'>
                            <img src="./images/canetinha.png" />
                            Editar
                        </Link>                                    
                    </div>       
                </div>      
            </section>        
        </main>     
    )
}   