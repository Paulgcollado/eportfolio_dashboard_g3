import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import UserContext from '../contexts/UserContext.jsx';

const NuevaEvidenciaForm = (props) => {

    const user = useContext(UserContext);

    // Objeto TAREA en su estado inicial
    const ESTADO_INICIAL = {
        tarea_id: props.tarea.id,
        estudiante_id: user,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }

    // Uso de UseForm
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch
    } = useForm({ defaultValues: ESTADO_INICIAL });

    const manejarFormulario = handleSubmit((nuevaEvidencia) => {
        props.evidencias.crearEvidencia(nuevaEvidencia).then((evidenciaCreada) => {
            if (Object.keys(evidenciaCreada).length > 0) {
                props.manejarAñadirEvidencia(evidenciaCreada);
                reset(ESTADO_INICIAL);
            } else {
                console.log("ERROR al crear la evidencia")
            }
        });
    });

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { width: '100%' } }}
            autoComplete='off'
            onSubmit={manejarFormulario}
        >
            <TextField id="url" label="URL" variant="outlined" fullWidth
                {
                ...register(
                    "url",
                    {
                        required: {
                            value: true,
                            message: "La URL es obligatoria"
                        },
                        pattern: {
                            value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                            message: "Ingresa una URL válida"
                        }
                    }
                )
                }
            /><br /><span>{errors.url?.message}</span><br />

            <TextField
                id="descripcion"
                label="Observaciones"
                multiline
                rows={4}
                variant="outlined"
                {
                ...register(
                    "descripcion",
                    {
                        required: {
                            value: true,
                            message: "La descripción es obligatoria"
                        }
                    }
                )
                }
            /><br /><span>{errors.descripcion?.message}</span><br />

            <Button variant="contained" type='submit'>Añadir Evidencia</Button>
        </Box>
    );
};

export default NuevaEvidenciaForm;