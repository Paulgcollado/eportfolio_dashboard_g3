import { useEffect, useState } from "react";
import getModulosImpartidos from "../services/Modulos/getModulosImpartidos.js";

const useMisModulosImpartidos = (user) => {

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con los módulos impartidos por el usuario conectado desde el fichero mock_impartidos.js.
    const [lista, setLista] = useState([]);

    function obtenerModulosImpartidos() {
        setBuscando(true);
        getModulosImpartidos().then((modulos) => {
            const listaModulos = modulos[user].lista;
            setLista(listaModulos);
            setBuscando(false);
        })
    }

    useEffect(obtenerModulosImpartidos, []);

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista };
}

export default useMisModulosImpartidos;