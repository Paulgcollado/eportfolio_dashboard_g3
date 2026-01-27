import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import opcionesMenu from '../mocks/mock-administrador';
import useModulosImpartidos from '../hooks/useMisModulosImpartidos.jsx';
import useModulosMatriculados from '../hooks/useMisModulosMatriculados.jsx';
import MenuItem from './MenuItem.jsx';

const Menu = (props) => {

    const modulosImpartidos = useModulosImpartidos(props.user);
    const modulosMatriculados = useModulosMatriculados(props.user);

    const renderMenuItems = (rol) => {
        switch (rol) {
            case "administrador":
                return opcionesMenu.administrador.map((opcion, index) => (
                    <MenuItem ruta={opcion.ruta} nombre={opcion.nombre} key={index}></MenuItem>
                ));
            case "docente":
                return modulosImpartidos.lista.map((modulo, index) => (
                    <MenuItem ruta={`/funcionalidaddocente/${modulo.id}`} nombre={modulo.nombre} key={index}></MenuItem>
                ));
            case "estudiante":
                return modulosMatriculados.lista.map((modulo, index) => (
                    <MenuItem ruta={`/funcionalidadestudiante/${modulo.id}`} nombre={modulo.nombre} key={index}></MenuItem>
                ));
            default:
                return null;
        }
    }

    return (
        <div>
            {
                props.roles.map((rol, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span">{String(rol).toUpperCase()}</Typography>
                        </AccordionSummary>
                        {
                            renderMenuItems(rol)
                        }
                    </Accordion>
                ))
            }
        </div>
    );
}

export default Menu;