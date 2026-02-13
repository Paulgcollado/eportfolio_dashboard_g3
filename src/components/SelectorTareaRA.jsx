import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useTareasRA from '../hooks/useTareasRA.jsx';

const SelectorTareaRA = (props) => {

    const { buscando, lista } = useTareasRA(1);
    const [tareaRA, setTareaRA] = useState('');

    function handleChange(event) {
        const nombreTarea = event.target.value;
        const tarea = lista.find((value) => value.observaciones === nombreTarea)
        props.onTareaSeleccionada(tarea);
        setTareaRA(nombreTarea);
    }

    function renderMenuItem(value) {
        return <MenuItem key={value.id} value={value.observaciones}>{value.observaciones}</MenuItem>
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel shrink>Tarea</InputLabel>
                <Select
                    value={tareaRA}
                    label="Tarea"
                    notched
                    onChange={handleChange}
                    displayEmpty
                    renderValue={(selected) => {
                        return (selected.length === 0) ? "Sin seleccionar" : selected;
                    }}
                >
                    {
                        (buscando) ? "Cargando..." : lista?.map(renderMenuItem)
                    }
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectorTareaRA;