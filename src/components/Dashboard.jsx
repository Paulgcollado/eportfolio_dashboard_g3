import { useContext } from "react"
import TokenContext from '../contexts/TokenContext.jsx';
import FuncionalidadDocente from "../pages/FuncionalidadDocente.jsx";
import FuncionalidadEstudiante from "../pages/FuncionalidadEstudiante.jsx";

import { Routes, Route } from "react-router-dom";

const Dashboard = () => {

    // Hacer uso de los contextos.
    const token = useContext(TokenContext);

    return (
        <main>
            <Routes>
                <Route path="/" element="" />
                <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />} />
                <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante />} />
            </Routes>
        </main>
    )
}

export default Dashboard;