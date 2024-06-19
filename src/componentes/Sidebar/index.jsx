import PropTypes from "prop-types";
import Logo from "./assets/Logo.svg";
import feed from "./assets/feed.svg";
import profile from "./assets/profile.svg";
import info from "./assets/info.svg";
import logout from "./assets/logout.svg";

function ItemSidebar({ img, children }) {
    return (
        <li>
            <a href="#">
                <img src={img} alt="" />
                <span>{children}</span>
            </a>
        </li>
    );
}

ItemSidebar.propTypes = {
    img: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} alt="Logo da Codeconnect" />
            <ul>
                <li>
                    <a href="#">Publicar</a>
                </li>
                <ItemSidebar img={feed}>Feed</ItemSidebar>
                <ItemSidebar img={profile}>Perfil</ItemSidebar>
                <ItemSidebar img={info}>Sobre nós</ItemSidebar>
                <ItemSidebar img={logout}>Sair</ItemSidebar>
            </ul>
        </aside>
    );
}
