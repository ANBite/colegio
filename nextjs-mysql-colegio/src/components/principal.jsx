"use client"
import React, { useState } from 'react';
import Estudianteform from './estudiante';


function FormSwitcher() {
  const [activeForm, setActiveForm] = useState('form1');

  return (
    <div>
        <button 
        onClick={() => setActiveForm('form1')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "500px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Formulario 1</button>
        

        <button 
        onClick={() => setActiveForm('form2')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "620px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Formulario 2</button>
        <button 
        onClick={() => setActiveForm('form3')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "740px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Formulario 3</button>

      {/* Mostrar el formulario según el estado */}
      {activeForm === 'form1' && <Estudianteform/>}

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
