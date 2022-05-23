import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ICONS } from '../constants';

function createData(
  date:string,
  detail:string
) {
  return { date, detail };
}

const rows = [
  createData('13/05/2022-15:24',"Entregar llaves a cliente porque se olvido, pero regresa la siguiente semana."),
  createData('13/05/2022-15:24',"Entregar llaves a cliente porque se olvido, pero regresa la siguiente semana."),
  createData('13/05/2022-15:24',"Entregar llaves a cliente porque se olvido, pero regresa la siguiente semana."),
  createData('13/05/2022-15:24',"Entregar llaves a cliente porque se olvido, pero regresa la siguiente semana."),
  createData('13/05/2022-15:24',"Entregar llaves a cliente porque se olvido, pero regresa la siguiente semana."),

];

export default function TRSTable() {
  return (
    <TableContainer component={Paper}>
        <h2 className='p-2 font-semibold'>CONSIGNAS ESPECIALES PENDIENTES TRS</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-blue-100'>
          <TableRow>
            <TableCell className='font-bold'>FECHA/HORA</TableCell>
            <TableCell align="right">CONSIGNAS</TableCell>
            <TableCell align="right">ESTADO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="hover:bg-blue-100"
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.detail}</TableCell>
              <TableCell align="right">
                  <ICONS.XCircleIconS className="h-6 hover:cursor-pointer" color="red"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
