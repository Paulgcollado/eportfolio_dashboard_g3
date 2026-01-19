import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import tareasRA from '../mocks/mock-tareasRA.js';

const SelectorTareaRA = (props) => {

    const [tareaRA, setTareaRA] = useState('');

    function handleChange(event) {
        const tareaId = event.target.value;
        setTareaRA(tareaId);

        const tarea = tareasRA.lista.find((value) => value.id === tareaId)
        props.onTareaSeleccionada(tarea);
    }

    function renderMenuItem(value) {
        return <MenuItem key={value.id} value={value.id}>{value.observaciones}</MenuItem>
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
                <Select
                    value={tareaRA}
                    label="Tarea"
                    onChange={handleChange}
                    displayEmpty
                    renderValue={(selected) => {
                        return (selected.length === 0) ? "Sin seleccionar" : selected;
                    }}
                >
                    {
                        tareasRA.lista.map(renderMenuItem)
                    }
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectorTareaRA;