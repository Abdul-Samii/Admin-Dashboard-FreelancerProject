import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ICONS } from '../constants';

interface Column {
  id: 'Ejectivos' | 'Alias' | 'Creado' | 'Opciones';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'Ejectivos', label: 'Ejectivos', minWidth: 300 },
  { id: 'Alias', label: 'Alias', minWidth: 250 },
  { id: 'Creado', label: 'Creado', minWidth: 200 },
  { id: 'Opciones', label: 'Opciones', minWidth: 300 },
 
];

interface Data {
    Ejectivos: string,
    Alias: string,
    Creado: string,
    Opciones: string,

}

function createData(
    Ejectivos: string,
    Alias: string,
    Creado: string,
    Opciones: string,
): Data {
  return { Ejectivos, Alias, Creado,Opciones };
}

const rows = [
  createData('staging',"TR1",'22/11/2021 10:35'),
  createData('abhin/repo/api/allow_repo_updates',"TR2",'22/11/2021 10:35'),
  createData('zdavis/BBCDEV-1577',"TR3",'22/11/2021 10:35'),
  createData('tkells/BBCDEV-1631-fix-require-account=access',"TF3",'22/11/2021 10:35'),
  createData('jmooring/BBDEV-1603',"TG2",'22/11/2021 10:35'),

];

export default function EjectivosTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (

    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth,backgroundColor:'#F8F9FA' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {
                            [column.id] == 'ESTADO'?
                            <ICONS.XCircleIconS className="h-6 hover:cursor-pointer" color="red"/>
                            :
                            value
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
             