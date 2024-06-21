import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Card from "./componentes/Card";
import Filtro from "./componentes/Filtro";
import Ordenacao from "./componentes/Ordenacao";
import Sidebar from "./componentes/Sidebar";

function App() {
    return (
        <div className="container">
            <Sidebar />
            <div>
                <BarraDePesquisa />
                <Filtro />
                <Ordenacao />
                <Card />
            </div>
        </div>
    );
}

export default App;
