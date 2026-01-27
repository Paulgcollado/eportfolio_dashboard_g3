import { useContext, useState } from "react";
import ROLES from "../mocks/mock-roles.js";
import UserContext from "../contexts/UserContext";

const useRoles = () => {
    const user = useContext(UserContext);

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con los roles asociados al usuario conectado desde el fichero mock_roles.js.
    const [lista, setLista] = useState(ROLES[user].roles);

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista };
}

export default useRoles;