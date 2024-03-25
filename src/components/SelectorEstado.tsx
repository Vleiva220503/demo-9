import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import CustomDropDownIcon from './CustomDropDownIcon';
import styles from './SelectorEstado.module.scss';

interface Estado {
  valor: string;
  color: string;
}

interface SelectorEstadoProps {
  label: string;
  defaultValue: string;
  data: Estado[];
}

const SelectorEstado = ({ label, defaultValue, data }: SelectorEstadoProps) => {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState<string>(defaultValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEstadoSeleccionado(event.target.value as string);
  };

  const handleOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  const colorSeleccionado = data.find(estado => estado.valor === estadoSeleccionado)?.color;

  return (
    <FormControl className={styles.formControl}>
      <Select
        id="selector-estado"
        value={estadoSeleccionado}
        onChange={handleChange}
        displayEmpty
        className={`${styles.select}`}
        style={{ backgroundColor: colorSeleccionado }}
        MenuProps={{
          PaperProps: {
            style: {
              border: 'none',
            },
          },
        }}
        IconComponent={() => (
          <div style={{ transform: 'translateX(-6px)' }}>
            <CustomDropDownIcon rotate={isDropdownOpen} />
          </div>
        )}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        {data.map((estado) => (
          <MenuItem
            key={estado.valor}
            value={estado.valor}
            className={styles.menuItem}
          >
            <div className={styles.textContainer}>
              {estado.valor}
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectorEstado;
