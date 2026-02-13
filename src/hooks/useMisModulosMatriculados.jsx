import { useEffect, useState } from "react";
import getModulosMatriculados from "../services/Modulos/getModulosMatriculados.js";

const useMisModulosMatriculados = (user) => {

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con los módulos matriculados por el usuario conectado desde el fichero mock_matriculados.js.
    const [lista, setLista] = useState([]);

    function obtenerModulosMatriculados() {
        setBuscando(true);
        getModulosMatriculados().then((modulos) => {
            const listaModulos = modulos[user].lista;
            setLista(listaModulos);
            setBuscando(false);
        })
    }

    useEffect(obtenerModulosMatriculados, []);

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista };
}

export default useMisModulosMatriculados;