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
import TipoDocumentoEstudianteForm from './tipo_documento_estudiante';
import TipoDocumentoEmpleadoForm from './tipo_documento_empleado';
import ContactoEmergenciaEstudianteForm from './contacto_emergencia_estudiante';
import ContactoEmergenciaEmpleadoForm from './contacto_emergencia_empleado';
import TipoDeEmpleadoForm from './tipo_empleado';
import PuestoForm from './puesto';
import DocumentacionEmpleadoForm from './documentacion_empleado';
import DocumentacionEstudianteForm from './documentacion_estudiante';
import HistorialEmpleadoForm from './historial_empleado';
import ContratoEmpleadoForm from './contrato_empleado';
import AsistenciaEmpleadoForm from './asistencia_empleado';
import UsuarioForm from './usuario';
import GradoForm from './grado';
import SeccionForm from './seccion';
import CursoForm from './curso';
import HistorialAcademicoForm from './historial_academico';
import InscripcionEstudiantesForm from './inscripcion_estudiantes';
import CalificacionForm from './calificacion';
import AsistenciaForm from './asistencia';
import PagoMatriculaForm from './pago_matricula';

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
        <button 
        onClick={() => setActiveForm('Tdocumentacion_estudiante')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "20px",
                  width: "180px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Tipo de Documento Estudiante</button>
        <button 
        onClick={() => setActiveForm('Tdocumentacion_empleado')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "200px",
                  width: "180px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Tipo de Documento empleado</button>
        <button 
        onClick={() => setActiveForm('Cemergencia_estudiante')}
        style={{
                  position: "absolute",
                  top: "25px",
                  left: "980px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}># Emergencia Estudiante</button>
        <button 
        onClick={() => setActiveForm('Cemergencia_empleado')}
        style={{
                  position: "absolute",
                  top: "25px",
                  left: "1100px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}># Emergencia Empleado</button>
        <button 
        onClick={() => setActiveForm('t_empleado')}
        style={{
                  position: "absolute",
                  top: "25px",
                  left: "1220px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Tipo de empleado</button>
        <button 
        onClick={() => setActiveForm('puesto')}
        style={{
                  position: "absolute",
                  top: "25px",
                  left: "1340px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Puesto</button>
        <button 
        onClick={() => setActiveForm('documentacion_empleado')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "380px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Documentacion Empleado</button>        
        <button 
        onClick={() => setActiveForm('documentacion_estudiante')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "500px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Documentacion Estudiante</button>
        <button 
        onClick={() => setActiveForm('historial_empleado')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "620px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Empleado Historial</button>
        <button 
        onClick={() => setActiveForm('contrato_empleado')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "740px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Contrato empleado</button>
        <button 
        onClick={() => setActiveForm('asistencia_empleado')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "860px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Asistencia Empleado</button>
        <button 
        onClick={() => setActiveForm('Usuario')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "980px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Usuario</button>
        <button 
        onClick={() => setActiveForm('grado')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "1100px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Grado</button>
        <button 
        onClick={() => setActiveForm('seccion')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "1220px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Seccion</button>
        <button 
        onClick={() => setActiveForm('curso')}
        style={{
                  position: "absolute",
                  top: "720px",
                  left: "1340px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Curso</button>
        <button 
        onClick={() => setActiveForm('his_academico')}
        style={{
                  position: "absolute",
                  top: "770px",
                  left: "20px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Historial Académico</button>
        <button 
        onClick={() => setActiveForm('inscripcion_estudiantes')}
        style={{
                  position: "absolute",
                  top: "770px",
                  left: "140px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Insribir Estudiantes</button>
        <button 
        onClick={() => setActiveForm('calificaciones')}
        style={{
                  position: "absolute",
                  top: "770px",
                  left: "260px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Calificaciones</button>
        <button 
        onClick={() => setActiveForm('asistencia')}
        style={{
                  position: "absolute",
                  top: "770px",
                  left: "380px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Asistencia</button>
        <button 
        onClick={() => setActiveForm('matricula')}
        style={{
                  position: "absolute",
                  top: "770px",
                  left: "500px",
                  width: "120px",
                  height: "45px",
                  backgroundColor: "#6600A1",
                  color: "#fff",
                  borderRadius: "12px",
              }}>Pago Matricula</button>
              


      {/* Mostrar el formulario según el estado */}
      {activeForm === 'estudiante' && <Estudianteform/>}

      {activeForm === 'cicloescolar' && <CicloEscolarForm/>}

      {activeForm === 'empleado' && <EmpleadoForm/>}

      {activeForm === 'asignacion_curso' && <AsignacionCursoForm/>}

      {activeForm === 'beca' && <BecaForm/>}
      
      {activeForm === 'prerrequisito' && <PrerrequisitoGradoForm/>}

      {activeForm === 'aula' && <AulaForm/>}
      
      {activeForm === 'departamento' && <DepartamentoForm/>}
            
      {activeForm === 'Tdocumentacion_estudiante' && <TipoDocumentoEstudianteForm/>}

      {activeForm === 'Tdocumentacion_empleado' && <TipoDocumentoEmpleadoForm/>}

      {activeForm === 'Cemergencia_estudiante' && <ContactoEmergenciaEstudianteForm/>}

      {activeForm === 'Cemergencia_empleado' && <ContactoEmergenciaEmpleadoForm/>}
      
      {activeForm === 't_empleado' && <TipoDeEmpleadoForm/>}
            
      {activeForm === 'puesto' && <PuestoForm/>}
                  
      {activeForm === 'documentacion_empleado' && <DocumentacionEmpleadoForm/>}
                        
      {activeForm === 'documentacion_estudiante' && <DocumentacionEstudianteForm/>}
                              
      {activeForm === 'historial_empleado' && <HistorialEmpleadoForm/>}
                                    
      {activeForm === 'contrato_empleado' && <ContratoEmpleadoForm/>}
                                          
      {activeForm === 'asistencia_empleado' && <AsistenciaEmpleadoForm/>}
                                          
      {activeForm === 'Usuario' && <UsuarioForm/>}
                                                
      {activeForm === 'grado' && <GradoForm/>}
                                                      
      {activeForm === 'seccion' && <SeccionForm/>}
                                                      
      {activeForm === 'curso' && <CursoForm/>}
                                                            
      {activeForm === 'his_academico' && <HistorialAcademicoForm/>}
                                                                  
      {activeForm === 'inscripcion_estudiantes' && <InscripcionEstudiantesForm/>}
                                                                        
      {activeForm === 'calificaciones' && <CalificacionForm/>}
                                                                              
      {activeForm === 'asistencia' && <AsistenciaForm/>}
                                                                                    
      {activeForm === 'matricula' && <PagoMatriculaForm/>}
      
    </div>
  );
}

export default FormSwitcher;
