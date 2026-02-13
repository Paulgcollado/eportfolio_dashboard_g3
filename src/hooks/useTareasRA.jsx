import { useEffect, useState } from "react";
import getTareasPorRA from "../services/Tareas/getTareasPorRA.js";

const useTareasRA = (ra_) => {

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con las tareas asociadas al ra.
    const [lista, setLista] = useState([]);

    function obtenerTareasPorRA() {
        setBuscando(true);
        getTareasPorRA(ra_).then((tareas) => {
            const listaTareas = tareas.lista;
            setLista(listaTareas);
            setBuscando(false);
        });
    }

    useEffect(obtenerTareasPorRA, [ra_]);

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista };
}

export default useTareasRA;