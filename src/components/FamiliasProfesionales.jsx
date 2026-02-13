import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useFamiliasProfesionales from '../hooks/useFamiliasProfesionales';

const FamiliasProfesionales = () => {

    const { buscando, lista } = useFamiliasProfesionales();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Código</TableCell>
                        <TableCell align="right">Descripción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (buscando) ? "Cargando..." :
                            lista.map((familia) => (
                                <TableRow
                                    key={familia.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {familia.nombre}
                                    </TableCell>
                                    <TableCell align="right">{familia.codigo}</TableCell>
                                    <TableCell align="right">{familia.descripcion}</TableCell>
                                </TableRow>
                            ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default FamiliasProfesionales;