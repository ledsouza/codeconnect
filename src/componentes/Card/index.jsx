import PropTypes from "prop-types";
import Capa from "./assets/capa.png";
import Chat from "./assets/chat.svg";
import Code from "./assets/code.svg";
import Profile from "./assets/profile.png";
import Share from "./assets/share.svg";
import "./styles.css";

function ItemCardRodape({ icone, alt, children }) {
    return (
        <li className="card__item">
            <img src={icone} alt={alt} />
            {children}
        </li>
    );
}

ItemCardRodape.propTypes = {
    icone: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default function Card() {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Capa} alt="Imagem do post" />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>Título do post</h3>
                    <p>Resumo do post</p>
                </div>
            </div>
            <div className="conteudo__rodape">
                <ul>
                    <ItemCardRodape icone={Code} alt="códigos">
                        12
                    </ItemCardRodape>
                    <ItemCardRodape icone={Share} alt="compartilhamentos">
                        12
                    </ItemCardRodape>
                    <ItemCardRodape icone={Chat} alt="comentários">
                        12
                    </ItemCardRodape>
                </ul>
                <div className="rodape__usuario">
                    <img src={Profile} alt="imagem do usuário" />
                    @ledsouza
                </div>
            </div>
        </article>
    );
}
