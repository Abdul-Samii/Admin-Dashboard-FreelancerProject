import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ICONS } from '../constants';
import { CreateEjecutivo, DeleteEjecutivo, EditEjecutivo } from '../modals';

interface Column {
  id: 'Ejectivos' | 'Alias' | '# Familiares' | 'Opciones';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'Ejectivos', label: 'Ejectivos', minWidth: 300 },
  { id: 'Alias', label: 'Alias', minWidth: 250 },
  { id: 'Familiares', label: '# Familiares', minWidth: 200 },
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
    Familiares: string,
    Opciones: string,
): Data {
  return { Ejectivos, Alias, Familiares,Opciones };
}

const rows = [
  createData('staging',"TR1",'0'),
  createData('abhin/repo/api/allow_repo_updates',"TR2",'1'),
  createData('zdavis/BBCDEV-1577',"TR3",'2'),
  createData('tkells/BBCDEV-1631-fix-require-account=access',"TF3",'0'),
  createData('jmooring/BBDEV-1603',"TG2",'4'),

];

export default function EjectivosTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const [Create,setCreate] = useState(false)
  const [Edit,setEdit] = useState(false)
  const [Delete,setDelete] = useState(false)


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth,backgroundColor:'#F8F9FA',fontWeight:'bold' }}
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
                            [column.id] == 'Opciones'?
                            <div className='flex gap-2 -ml-2'>
                                <ICONS.CheckCircleIconS className="h-5 hover:cursor-pointer" color="red"/>
                                <ICONS.userAddIconO onClick={()=>setCreate(true)} className="h-5 hover:cursor-pointer " color="black" />
                                <ICONS.PencilIconS onClick={()=>setEdit(true)} className="h-5 hover:cursor-pointer " color="#86AD6C" />
                                <ICONS.ArchiveIconS onClick={()=>setDelete(true)} className="h-5 hover:cursor-pointer" color="#A70045"/>

                            </div>
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
     
     <div className='justify-start bg-red-500 flex flex-col'>
      {
        Create&&<CreateEjecutivo Create={Create}  setCreate={setCreate}/>
      }
      {
        Edit&&<EditEjecutivo Edit={Edit}  setEdit={setEdit}/>
      }
      {
        Delete&&<DeleteEjecutivo Delete={Delete} setDelete={setDelete} />
      }
    </div>
    </div>
  );
}
             