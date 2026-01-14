import { useContext } from "react"
import UserContext from '../contexts/UserContext.jsx'

const Roles = (props) => {

    // Hacer uso del contexto UserContext para acceder al valor del nombre de usuario.
    const user = useContext(UserContext);

    return (
        <aside>
            <h1>ROLES</h1>
            <p>{props.menu}</p>
        </aside>
    )
}

export default Roles