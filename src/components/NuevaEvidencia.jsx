import { useState } from "react";

import SelectorTareaRA from "./SelectorTareaRA.jsx";
import NuevaEvidenciaForm from "./NuevaEvidenciaForm.jsx";

import tareasRA from '../mocks/mock-tareasRA.js';

const NuevaEvidencia = () => {

    const [listaTareas, setListaTareas] = useState(tareasRA.lista);
    const [tarea, setTarea] = useState({});

    const handleTareaSeleccionada = (tarea) => {
        console.log("Tarea seleccionada: ", tarea);
        setTarea(tarea);
    };

    const handleAñadirEvidencia = (evidencia) => {
        evidencia.tarea_id = tarea.id;
        console.log("EvidenciaAñadida: ", evidencia);
        setListaTareas([...listaTareas, evidencia]);
    }

    return (
        <div>
            <SelectorTareaRA onTareaSeleccionada={handleTareaSeleccionada}></SelectorTareaRA><br />
            <NuevaEvidenciaForm manejarAñadirEvidencia={handleAñadirEvidencia} tarea={tarea}></NuevaEvidenciaForm>
        </div>
    );
}

export default NuevaEvidencia;