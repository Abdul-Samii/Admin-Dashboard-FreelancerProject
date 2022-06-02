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
import { CreateEjecutivo, CreateVehicle, DeleteEjecutivo, DeleteVehicle, EditEjecutivo, EditVehicle } from '../modals';
import EditFamilyModal from '../modals/EditFamilyModal';

interface Column {
  id: 'Vehículo' | 'Alias' | 'Placas' | 'Tipo' | 'Ejectivo' | 'Creado' | 'Opciones';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'Vehículo', label: 'Vehículo', minWidth: 300 },
  { id: 'Alias', label: 'Alias', minWidth: 250 },
  { id: 'Placas', label: 'Placas', minWidth: 200 },
  { id: 'Tipo', label: 'Tipo', minWidth: 200 },
  { id: 'Ejectivo', label: 'Ejectivo', minWidth: 200 },

  { id: 'Creado', label: 'Creado', minWidth: 200 },
  { id: 'Opciones', label: 'Opciones', minWidth: 300 },
 
];

interface Data {
    Vehículo: string,
    Alias: string,
    Placas:String,
    Tipo:string,
    Ejectivo:string,
    Creado: string,
    Opciones: string,

}

function createData(
    Vehículo: string,
    Alias: string,
    Placas: string,
    Tipo:string,
    Ejectivo:string,
    Creado:string,
    Opciones: string,
): Data {
  return { Vehículo, Alias, Placas,Tipo,Ejectivo,Creado,Opciones };
}

const rows = [
  createData('staging',"TR1",'PCB4512','Vehiculo','Ahbin','22/11/2021  10:35'),
  createData('abhin/repo/api/allow_repo_updates',"TR2",'PCB4512','Moto','Luis','22/11/2021  10:35'),
  createData('zdavis/BBCDEV-1577',"TR3",'PCB4512','camioneta','Pepe','22/11/2021  10:35'),
  createData('tkells/BBCDEV-1631-fix-require-account=access',"TF3",'PCB4512','Vehiculo','Esposa','22/11/2021  10:35'),
  createData('jmooring/BBDEV-1603',"TG2",'PCB4512','Vehiculo','Ahbin','22/11/2021  10:35'),

];

export default function VehiculosEjecutivoTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const [Edit,setEdit] = useState(false)
  const [Delete,setDelete] = useState(false)
  const [Create,setCreate] = useState(false)
  const [EditFamily,setEditFamily] = useState(false)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>

    <div onClick={()=>setCreate(true)} className="bg-red-400 w-fit mb-10  -mt-10">
                <h3 className=' mt-3 bg-blue-500 w-fit px-2 text-center font-semibold rounded-sm
                 text-white hover:cursor-pointer'>Crear vehiculo de Ejecutivo</h3>
    </div>

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
     
     <div className='justify-start flex flex-col'>
      {
        Create&&<CreateVehicle Create={Create}  setCreate={setCreate}/>
      }
      {
        Edit&&<EditVehicle Edit={Edit}  setEdit={setEdit}/>
      }
      {
        Delete&&<DeleteVehicle Delete={Delete} setDelete={setDelete} />
      }
      {
        EditFamily&&<EditFamilyModal EditFamily={EditFamily} setEditFamily={setEditFamily} />
      }
    </div>
    </div>
  );
}
             