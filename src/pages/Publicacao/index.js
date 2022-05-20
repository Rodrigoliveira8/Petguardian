import { Link } from "react-router-dom";
import './index.scss';

export default function publicacao(){
    return(
        <main class="page-publi">
            <header>
            <div className="esquerda-he">
                <img width="150px" height="140px" src="./images/image 26.png"/>
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
                <div>

                </div>            
            </div>

            <div> 
                
            </div>            
        </section>        
        </main>     
    )
}