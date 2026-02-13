import { useState } from "react";
import MODULOS_MATRICULADOS from "../mocks/mock-matriculados.js";
import UserContext from "../contexts/UserContext";

const useMisModulosMatriculados = (user) => {

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con los módulos matriculados por el usuario conectado desde el fichero mock_matriculados.js.
    const [lista, setLista] = useState(MODULOS_MATRICULADOS[user].lista);

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista };
}

export default useMisModulosMatriculados;