import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/49919267?s=460&u=6eef5ea88818cc3e09374ad317ef7e6d431bce90&v=4" alt="Matheus Monteiro"/>
                        <div>
                            <strong>Matheus Monteiro</strong>
                            <span>Estrutura de dados</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta na arte de destruir e construir dados, o pior professor mais legal que você vai ter
                        <br/><br/>
                        Apaixonado por pizza e computadores avançados.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;