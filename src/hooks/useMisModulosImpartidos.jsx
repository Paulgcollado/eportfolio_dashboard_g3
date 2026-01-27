import { useContext, useState } from "react";
import MODULOS from "../mocks/mock-impartidos.js";
import UserContext from "../contexts/UserContext";

const useMisModulosImpartidos = () => {
    const user = useContext(UserContext);

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con los módulos impartidos por el usuario conectado desde el fichero mock_impartidos.js.
    const [lista, setLista] = useState(MODULOS[user].lista);

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista };
}

export default useMisModulosImpartidos;