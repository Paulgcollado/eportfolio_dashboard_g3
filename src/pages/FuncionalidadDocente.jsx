import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from '../components/Material/CustomTabPanel.jsx';

import PlanificarCriterios from '../components/PlanificarCriterios.jsx';
import EvaluarEvidencias from "../components/EvaluarEvidencias.jsx";
import AsignarRevisiones from '../components/AsignarRevisiones.jsx';

const FuncionalidadDocente = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="Opciones" centered>
                    <Tab label="PLANIFICAR CRITERIOS" />
                    <Tab label="EVALUAR EVIDENCIAS" />
                    <Tab label="ASIGNAR REVISIONES" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <PlanificarCriterios />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <EvaluarEvidencias />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AsignarRevisiones />
            </CustomTabPanel>
        </Box>
    );
}

export default FuncionalidadDocente;