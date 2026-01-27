import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from '../components/Material/CustomTabPanel.jsx';

import ProgresoCompletoAlumno from '../components/ProgresoCompletoAlumno.jsx';
import NuevaEvidencia from "../components/NuevaEvidencia.jsx";
import RevisionesPendientes from '../components/RevisionesPendientes.jsx';

const FuncionalidadEstudiante = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="Opciones" centered>
                    <Tab label="MI PROGRESO COMPLETO" />
                    <Tab label="SUBIR NUEVA EVIDENCIA" />
                    <Tab label="MIS REVISIONES PENDIENTES" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ProgresoCompletoAlumno />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <NuevaEvidencia />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <RevisionesPendientes />
            </CustomTabPanel>
        </Box>
    );
}

export default FuncionalidadEstudiante;