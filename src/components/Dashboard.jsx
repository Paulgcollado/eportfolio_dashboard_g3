import { useContext } from "react"
import TokenContext from '../contexts/TokenContext.jsx'

const Dashboard = () => {

    // Hacer uso del contexto TokenContext para acceder al valor del token.
    const token = useContext(TokenContext);

    return (
        <main>
            <h1>MAIN</h1>
            <p>{token}</p>
        </main>
    )
}

export default Dashboard