import { useContext } from "react";
import UserContext from '../contexts/UserContext.jsx';
import Menu from "./Menu.jsx";
import useRoles from "../hooks/useRoles.jsx"

const Roles = () => {

    // Hacer uso del contexto UserContext para acceder al valor del nombre de usuario.
    const user = useContext(UserContext);

    // Recuperar la lista de roles asociados al usuario contectado.
    const roles = useRoles(user);

    return (
        <aside>
            <Menu roles={roles.lista} user={user}></Menu>
        </aside>
    )
}

export default Roles