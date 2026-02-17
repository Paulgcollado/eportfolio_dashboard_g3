import { useState } from "react";
import newEvidencia from "../services/Evidencias/newEvidencia.js";

const useEvidencias = () => {

    // Estado llamado buscando inicializado a false.
    const [buscando, setBuscando] = useState(false);

    // Estado llamado lista que será un array inicializado con las evidencias.
    const [lista, setLista] = useState([]);

    function crearEvidencia(evidencia_) {
        setBuscando(true);
        return newEvidencia(evidencia_).then((evidenciaCreada) => {
            if (Object.keys(evidenciaCreada).length > 0) {
                setLista(prev => [...prev, evidenciaCreada]);
            }

            setBuscando(false);
            return evidenciaCreada;
        });
    }

    // El hook devolverá un objeto con ambos estados.
    return { buscando, lista, crearEvidencia };
}

export default useEvidencias;