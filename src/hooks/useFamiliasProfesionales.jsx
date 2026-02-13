import { useEffect, useState } from "react";
import getAllFamiliasProfesionales from "../services/FamiliasProfesionales/getAllFamiliasProfesionales.js";

const useFamiliasProfesionales = () => {

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con los módulos impartidos por el usuario conectado desde el fichero mock_impartidos.js.
    const [lista, setLista] = useState([]);

    function obtenerFamiliasProfesionales() {
        setBuscando(true);
        getAllFamiliasProfesionales().then((familias) => {
            setLista(familias);
            setBuscando(false);
        })
    }

    useEffect(obtenerFamiliasProfesionales, []);

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista };
}

export default useFamiliasProfesionales;