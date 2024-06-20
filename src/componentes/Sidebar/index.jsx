import PropTypes from "prop-types";
import Logo from "./assets/Logo.svg";
import feed from "./assets/feed.svg";
import profile from "./assets/profile.svg";
import info from "./assets/info.svg";
import logout from "./assets/logout.svg";
import "./styles.css";

function ItemSidebar({ img, className, children }) {
    return (
        <li>
            <a href="#" className={className}>
                <img src={img} alt="" />
                <span>{children}</span>
            </a>
        </li>
    );
}

ItemSidebar.propTypes = {
    img: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} alt="Logo da CodeConnect" />
            <ul className="lista-sidebar">
                <li>
                    <a href="#" className="item__link--publicacao">
                        Publicar
                    </a>
                </li>
                <ItemSidebar img={feed} className="item__link item__link--ativo">
                    Feed
                </ItemSidebar>
                <ItemSidebar img={profile} className="item__link">
                    Perfil
                </ItemSidebar>
                <ItemSidebar img={info} className="item__link">
                    Sobre nós
                </ItemSidebar>
                <ItemSidebar img={logout} className="item__link">
                    Sair
                </ItemSidebar>
            </ul>
        </aside>
    );
}
