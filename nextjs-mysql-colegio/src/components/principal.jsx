"use client"
import React, { useState } from 'react';
import Estudianteform from './estudiante';
import CicloEscolarForm from './ciclo_escolar';
import EmpleadoForm from './empleado';
import AsignacionCursoForm from './asignacion_curso';
import BecaForm from './beca';
import PrerrequisitoGradoForm from './prerrequisito_grado';
import AulaForm from './aula';
import DepartamentoForm from './departamento';


function FormSwitcher() {
  const [activeForm, setActiveForm] = useState('form1');

  return (
    <div>
        <button 
        onClick={() => setActiveForm('estudiante')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "20px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#e58100",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Estudiante</button>
        

        <button 
        onClick={() => setActiveForm('cicloescolar')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "140px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Ciclo Escolar</button>
        <button 
        onClick={() => setActiveForm('empleado')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "260px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Empleado</button>
        <button 
        onClick={() => setActiveForm('asignacion_curso')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "380px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Asignar Curso</button>
        <button 
        onClick={() => setActiveForm('beca')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "500px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Beca</button>
        <button 
        onClick={() => setActiveForm('prerrequisito')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "620px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Prerrequisitos</button>
        <button 
        onClick={() => setActiveForm('aula')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "740px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Aula</button>
        <button 
        onClick={() => setActiveForm('departamento')}
        style={{
                  position: "absolute",
                  top: "30px",
                  left: "860px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Departamento</button>
              


      {/* Mostrar el formulario según el estado */}
      {activeForm === 'estudiante' && <Estudianteform/>}

      {activeForm === 'cicloescolar' && <CicloEscolarForm/>}

      {activeForm === 'empleado' && <EmpleadoForm/>}

      {activeForm === 'asignacion_curso' && <AsignacionCursoForm/>}

      {activeForm === 'beca' && <BecaForm/>}
      
      {activeForm === 'prerrequisito' && <PrerrequisitoGradoForm/>}

      {activeForm === 'aula' && <AulaForm/>}
      
      {activeForm === 'departamento' && <DepartamentoForm/>}

      
    </div>
  );
}

export default FormSwitcher;
