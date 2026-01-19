import { useContext } from "react"
import TokenContext from '../contexts/TokenContext.jsx';
import NuevaEvidencia from "./NuevaEvidencia.jsx";

const Dashboard = () => {

    // Hacer uso de los contextos.
    const token = useContext(TokenContext);

    return (
        <main>
            <h1>MAIN</h1>
            <p>{token}</p>
            <NuevaEvidencia></NuevaEvidencia>
        </main>
    )
}

export default Dashboard;