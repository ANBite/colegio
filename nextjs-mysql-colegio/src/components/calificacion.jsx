"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function CalificacionForm() {
    const [calificacion, setCalificacion] = useState({
        estudiante_id: "",
        seccion_id: "",
        curso_id: "",
        bimestre: "",
        tipo_evaluacion: undefined,
        puntaje: undefined,
        ponderacion: undefined,
        fecha_registro: undefined,
        profesor_id: "",
        retroalimentacion: undefined,
        observaciones: undefined,
        fecha_actualizado: undefined,
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCalificacion({ ...calificacion, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/calificacion", calificacion);
            alert("Calificación registrada exitosamente");
            form.current.reset();
            setCalificacion({
                estudiante_id: "",
                seccion_id: "",
                curso_id: "",
                bimestre: "",
                tipo_evaluacion: undefined,
                puntaje: undefined,
                ponderacion: undefined,
                fecha_registro: undefined,
                profesor_id: "",
                retroalimentacion: undefined,
                observaciones: undefined,
                fecha_actualizado: undefined,
            });
        } catch (error) {
            console.error("Error al registrar calificación:", error);
            alert("Error al registrar calificación");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Calificación</h2>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">ID del estudiante:</label>
                    <input
                        type="number"
                        name="estudiante_id"
                        value={calificacion.estudiante_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">ID de la sección:</label>
                    <input
                        type="number"
                        name="seccion_id"
                        value={calificacion.seccion_id}
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
                        value={calificacion.curso_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Bimestre:</label>
                    <input
                        type="number"
                        name="bimestre"
                        value={calificacion.bimestre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Tipo de evaluación:</label>
                    <input
                        type="text"
                        name="tipo_evaluacion"
                        value={calificacion.tipo_evaluacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Puntaje:</label>
                    <input
                        type="number"
                        name="puntaje"
                        value={calificacion.puntaje}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Ponderación:</label>
                    <input
                        type="number"
                        name="ponderacion"
                        value={calificacion.ponderacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Fecha de registro:</label>
                    <input
                        type="date"
                        name="fecha_registro"
                        value={calificacion.fecha_registro}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">ID del profesor:</label>
                    <input
                        type="number"
                        name="profesor_id"
                        value={calificacion.profesor_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="col-span-2">
                    <label className="block text-gray-700">Retroalimentación:</label>
                    <textarea
                        name="retroalimentacion"
                        value={calificacion.retroalimentacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={3}
                    />
                </div>

                <div className="col-span-2">
                    <label className="block text-gray-700">Observaciones:</label>
                    <textarea
                        name="observaciones"
                        value={calificacion.observaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={3}
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Fecha actualizado:</label>
                    <input
                        type="date"
                        name="fecha_actualizado"
                        value={calificacion.fecha_actualizado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Calificación
            </button>
        </form>
    );
}
