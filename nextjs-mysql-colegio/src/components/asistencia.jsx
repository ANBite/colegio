"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function AsistenciaForm() {
    const [asistencia, setAsistencia] = useState({
        estudiante_id: "",
        curso_id: "",
        fecha: "",
        estado: "",
        observaciones: undefined,
        profesor_id: "",
        hora_registro: "",
        justificacion: undefined,
        documento_justificacion: undefined,
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAsistencia({ ...asistencia, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/asistencia", asistencia);
            alert("Asistencia registrada exitosamente");
            form.current.reset();
            setAsistencia({
                estudiante_id: "",
                curso_id: "",
                fecha: "",
                estado: "",
                observaciones: undefined,
                profesor_id: "",
                hora_registro: "",
                justificacion: undefined,
                documento_justificacion: undefined,
            });
        } catch (error) {
            console.error("Error al registrar asistencia:", error);
            alert("Error al registrar asistencia");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Asistencia</h2>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">ID del estudiante:</label>
                    <input
                        type="number"
                        name="estudiante_id"
                        value={asistencia.estudiante_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">ID del curso:</label>
                    <input
                        type="number"
                        name="curso_id"
                        value={asistencia.curso_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Fecha:</label>
                    <input
                        type="date"
                        name="fecha"
                        value={asistencia.fecha}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={asistencia.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Profesor ID:</label>
                    <input
                        type="number"
                        name="profesor_id"
                        value={asistencia.profesor_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Hora de registro:</label>
                    <input
                        type="time"
                        name="hora_registro"
                        value={asistencia.hora_registro}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="col-span-2">
                    <label className="block text-gray-700">Observaciones:</label>
                    <textarea
                        name="observaciones"
                        value={asistencia.observaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={3}
                    />
                </div>

                <div className="col-span-2">
                    <label className="block text-gray-700">Justificación:</label>
                    <textarea
                        name="justificacion"
                        value={asistencia.justificacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={3}
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Documento de justificación:</label>
                    <input
                        type="file"
                        name="documento_justificacion"
                        value={asistencia.documento_justificacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Asistencia
            </button>
        </form>
    );
}
