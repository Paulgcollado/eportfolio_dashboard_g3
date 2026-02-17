import { useState } from "react";

import SelectorTareaRA from "./SelectorTareaRA.jsx";
import NuevaEvidenciaForm from "./NuevaEvidenciaForm.jsx";

import useEvidencias from "../hooks/useEvidencias.jsx";

const NuevaEvidencia = () => {

    const evidencias = useEvidencias();
    const [tarea, setTarea] = useState({});

    const handleTareaSeleccionada = (tarea) => {
        console.log("Tarea seleccionada: ", tarea);
        setTarea(tarea);
    };

    const handleAñadirEvidencia = (evidencia) => {
        const evidenciaCompleta = {
            ...evidencia, tarea_id: tarea.id
        };
        console.log("EvidenciaAñadida: ", evidenciaCompleta);
    }

    return (
        <div>
            <SelectorTareaRA onTareaSeleccionada={handleTareaSeleccionada}></SelectorTareaRA><br />
            <NuevaEvidenciaForm manejarAñadirEvidencia={handleAñadirEvidencia} tarea={tarea} evidencias={evidencias}></NuevaEvidenciaForm>
        </div>
    );
}

export default NuevaEvidencia;