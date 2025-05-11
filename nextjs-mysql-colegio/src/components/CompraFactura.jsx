"use client"
import React, { useState } from 'react';

function FormSwitcher() {
  const [activeForm, setActiveForm] = useState('form1');

  return (
    <div className="p-4">
      {/* Botones para cambiar de formulario */}
      <div className="mb-4 flex gap-2">
        <button onClick={() => setActiveForm('form1')}>Formulario 1</button>
        <button onClick={() => setActiveForm('form2')}>Formulario 2</button>
        <button onClick={() => setActiveForm('form3')}>Formulario 3</button>
      </div>

      {/* Mostrar el formulario según el estado */}
      {activeForm === 'form1' && (
        <form>
          <h2>Formulario 1</h2>
          <input type="text" placeholder="Nombre" />
        </form>
      )}

      {activeForm === 'form2' && (
        <form>
          <h2>Formulario 2</h2>
          <input type="email" placeholder="Correo" />
        </form>
      )}

      {activeForm === 'form3' && (
        <form>
          <h2>Formulario 3</h2>
          <input type="password" placeholder="Contraseña" />
        </form>
      )}
    </div>
  );
}

export default FormSwitcher;
