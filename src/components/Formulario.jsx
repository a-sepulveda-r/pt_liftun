import { useState, useEffect } from 'react';
import {
  TextField,
  Switch,
  Button,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  InputLabel,
  Typography,
  Modal,
} from '@mui/material';
import { tableHeaders } from '../data/tableHeaders';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombreAccion: '',
    fechaInicio: '',
    fechaTermino: '',
    tieneResponsable: false,
    tieneObjetivo: false,
    tipoAccion: '',
    requiereCalculoHuella: false,
    esObligacionLegal: false,
  });

  const [formEntries, setFormEntries] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormEntries(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEntries = [...formEntries, formData];
    setFormEntries(updatedEntries);
    localStorage.setItem('formData', JSON.stringify(updatedEntries));
    setFormData({
      nombreAccion: '',
      fechaInicio: '',
      fechaTermino: '',
      tieneResponsable: false,
      tieneObjetivo: false,
      tipoAccion: '',
      requiereCalculoHuella: false,
      esObligacionLegal: false,
    });
    handleClose();
  };

  return (
    <div style={{ paddingTop: '20px', height: '100vh', marginBottom: '30px' }}>
      <Typography
        variant='h3'
        sx={{ marginBottom: '20px' }}
      >
        Event Name
      </Typography>

      <Button
        variant='contained'
        color='success'
        onClick={handleOpen}
        sx={{ borderRadius: '20px', padding: '10px', margin: '10px 0px' }}
      >
        Crear evento
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          onSubmit={handleSubmit}
          sx={style}
          component='form'
        >
          <Box sx={{ marginBottom: '20px' }}>
            <TextField
              label='Nombre de la acción'
              name='nombreAccion'
              value={formData.nombreAccion}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ marginBottom: '20px' }}>
            <TextField
              label='Fecha de Inicio'
              type='date'
              name='fechaInicio'
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.fechaInicio}
              onChange={handleChange}
              required
            />
          </Box>

          <Box sx={{ marginBottom: '20px' }}>
            <TextField
              label='Fecha Término'
              type='date'
              name='fechaTermino'
              value={formData.fechaTermino}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={formData.tieneResponsable}
                onChange={handleChange}
                name='tieneResponsable'
              />
            }
            label='Tiene Responsable'
          />

          <FormControlLabel
            control={
              <Switch
                checked={formData.tieneObjetivo}
                onChange={handleChange}
                name='tieneObjetivo'
              />
            }
            label='Tiene Objetivo'
            sx={{ marginBottom: '10px' }}
          />

          <FormControl
            fullWidth
            sx={{ marginBottom: '10px' }}
          >
            <InputLabel>Tipo de Acción</InputLabel>
            <Select
              value={formData.tipoAccion}
              onChange={handleChange}
              name='tipoAccion'
              required
            >
              <MenuItem value=''>Selecciona el tipo de acción</MenuItem>
              <MenuItem value='Better World'>Better World</MenuItem>
              <MenuItem value='Better Place'>Better Place</MenuItem>
              <MenuItem value='Better Company'>Better Company</MenuItem>
              <MenuItem value='Better Profit'>Better Profit</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Switch
                checked={formData.requiereCalculoHuella}
                onChange={handleChange}
                name='requiereCalculoHuella'
              />
            }
            label='Requiere cálculo de huella'
          />
          <br />
          <FormControlLabel
            control={
              <Switch
                checked={formData.esObligacionLegal}
                onChange={handleChange}
                name='esObligacionLegal'
              />
            }
            label='Es una obligación legal'
            sx={{ marginBottom: '10px' }}
          />

          <Box
            sx={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Button
              type='submit'
              variant='contained'
              color='primary'
            >
              Guardar evento
            </Button>
            <Button
              type='button'
              variant='contained'
              color='secondary'
              onClick={handleClose}
            >
              Cerrar y volver al Home
            </Button>
          </Box>
        </Box>
      </Modal>

      <Box sx={{ margin: 'auto', overflowX: 'auto' }}>
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
                <TableCell>
                  {entry.requiereCalculoHuella ? 'Sí' : 'No'}
                </TableCell>
                <TableCell>{entry.esObligacionLegal ? 'Sí' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default Formulario;
