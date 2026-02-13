import { useContext } from "react"
import { Routes, Route } from "react-router-dom";

import TokenContext from '../contexts/TokenContext.jsx';
import FuncionalidadDocente from "../pages/FuncionalidadDocente.jsx";
import FuncionalidadEstudiante from "../pages/FuncionalidadEstudiante.jsx";
import PaginaFamiliasProfesionales from "../pages/PaginaFamiliasProfesionales.jsx";

const Dashboard = () => {

    // Hacer uso de los contextos.
    const token = useContext(TokenContext);

    return (
        <main>
            <Routes>
                <Route path="/" element="" />
                <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente />} />
                <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante />} />
                <Route path="familiasprofesionales" element={<PaginaFamiliasProfesionales />}></Route>
            </Routes>
        </main>
    )
}

export default Dashboard;