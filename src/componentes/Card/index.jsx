import PropTypes from "prop-types";
import Chat from "./assets/chat.svg";
import Code from "./assets/code.svg";
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

export default function Card({
    id,
    imagemUrl,
    titulo,
    resumo,
    linhasDeCodigo,
    compartilhamentos,
    comentarios,
    usuario,
}) {
    return (
        <article className="card" id={id}>
            <div className="card__imagem">
                <img src={imagemUrl} alt="Imagem do post" />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
            </div>
            <div className="conteudo__rodape">
                <ul>
                    <ItemCardRodape icone={Code} alt="códigos">
                        {linhasDeCodigo}
                    </ItemCardRodape>
                    <ItemCardRodape icone={Share} alt="compartilhamentos">
                        {compartilhamentos}
                    </ItemCardRodape>
                    <ItemCardRodape icone={Chat} alt="comentários">
                        {comentarios}
                    </ItemCardRodape>
                </ul>
                <div className="rodape__usuario">
                    <img src={usuario.imagem} alt="imagem do usuário" />
                    {usuario.nome}
                </div>
            </div>
        </article>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    imagemUrl: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
    linhasDeCodigo: PropTypes.number.isRequired,
    compartilhamentos: PropTypes.number.isRequired,
    comentarios: PropTypes.number.isRequired,
    usuario: PropTypes.shape({
        imagem: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
    }).isRequired,
};
