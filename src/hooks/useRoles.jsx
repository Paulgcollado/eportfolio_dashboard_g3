import { useEffect, useState } from "react";
import getAllRoles from "../services/Roles/getAllRoles.js";

const useRoles = (user) => {

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con los roles asociados al usuario conectado desde el fichero mock_roles.js.
    const [lista, setLista] = useState([]);

    function obtenerRoles() {
        setBuscando(true);
        getAllRoles().then((roles) => {
            const listaRoles = roles.data;
            setLista(listaRoles);
            setBuscando(false);
            console.log(listaRoles);
        })
    }

    useEffect(obtenerRoles, []);

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista };
}

export default useRoles;