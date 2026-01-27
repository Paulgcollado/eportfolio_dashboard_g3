import { Link } from 'react-router-dom';
import AccordionDetails from '@mui/material/AccordionDetails';

const MenuItem = (props) => {
    return (
        <AccordionDetails>
            <Link to={props.ruta}>
                {props.nombre}
            </Link>
        </AccordionDetails>
    );
}

export default MenuItem;