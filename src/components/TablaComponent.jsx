import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { tableHeaders } from '../data/tableHeaders';
export const TablaComponent = ({ formEntries }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeaders.map((header, index) => (
            <TableCell key={index}>{header} </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {formEntries.map((entry, index) => (
          <TableRow key={index}>
            <TableCell>{entry.nombreAccion}</TableCell>
            <TableCell>{entry.fechaInicio}</TableCell>
            <TableCell>{entry.fechaTermino}</TableCell>
            <TableCell>{entry.tieneResponsable ? 'Sí' : 'No'}</TableCell>
            <TableCell>{entry.tieneObjetivo ? 'Sí' : 'No'}</TableCell>
            <TableCell>{entry.tipoAccion}</TableCell>
            <TableCell>{entry.requiereCalculoHuella ? 'Sí' : 'No'}</TableCell>
            <TableCell>{entry.esObligacionLegal ? 'Sí' : 'No'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
