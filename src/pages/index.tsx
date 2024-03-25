
import React from 'react';
import SelectorEstado from '../components/SelectorEstado'; 

const index = () => {
  const estados = [
    { valor: 'activo', color: '#4CAF50' },
    { valor: 'en revision', color: '#000000' },
    { valor: 'vencido', color: '#F44336' },
    { valor: 'button', color: '#9C27B0' }
  ];

  return (
    <div>
      <SelectorEstado
        label="Estados"
        defaultValue="en revision"
       data={estados}
      />
    </div>
  );
}
 export default index;
