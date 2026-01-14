import { useContext } from "react"
import TokenContext from '../contexts/TokenContext.jsx'
import UserContext from '../contexts/UserContext.jsx'

const Dashboard = () => {

    // Hacer uso de los contextos.
    const token = useContext(TokenContext);
    const user = useContext(UserContext);

    return (
        <main>
            <h1>MAIN</h1>
            <p>{token}</p>
        </main>
    )
}

export default Dashboard