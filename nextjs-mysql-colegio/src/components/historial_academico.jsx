"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function HistorialAcademicoForm() {
    const [historial, setHistorial] = useState({
        fecha_de_registro: "",
        estudiante_id: "",
        grado_id: "",
        ciclo_escolar_id: "",
        seccion_id: "",
        estado: "",
        cursado_cursando: "",
        promedio_final: "",
        observaciones: "",
        promovido: false,
        recomendacion: "",
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setHistorial({
            ...historial,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/historial_academico", historial);
            alert("Historial académico registrado exitosamente");
            form.current.reset();
            setHistorial({
                fecha_de_registro: "",
                estudiante_id: "",
                grado_id: "",
                ciclo_escolar_id: "",
                seccion_id: "",
                estado: "",
                cursado_cursando: "",
                promedio_final: "",
                observaciones: "",
                promovido: false,
                recomendacion: "",
            });
        } catch (error) {
            console.error("Error al registrar historial:", error);
            alert("Error al registrar historial académico");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Historial Académico</h2>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">Fecha de registro:</label>
                    <input
                        type="date"
                        name="fecha_de_registro"
                        value={historial.fecha_de_registro}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">ID del estudiante:</label>
                    <input
                        type="number"
                        name="estudiante_id"
                        value={historial.estudiante_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">ID del grado:</label>
                    <input
                        type="number"
                        name="grado_id"
                        value={historial.grado_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">ID del ciclo escolar:</label>
                    <input
                        type="number"
                        name="ciclo_escolar_id"
                        value={historial.ciclo_escolar_id}
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
                        value={historial.seccion_id}
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
                        value={historial.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Cursado/Cursando:</label>
                    <input
                        type="text"
                        name="cursado_cursando"
                        value={historial.cursado_cursando}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Promedio final:</label>
                    <input
                        type="number"
                        step="0.01"
                        name="promedio_final"
                        value={historial.promedio_final}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="col-span-2">
                    <label className="block text-gray-700">Observaciones:</label>
                    <textarea
                        name="observaciones"
                        value={historial.observaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={3}
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="promovido"
                        checked={historial.promovido}
                        onChange={handleChange}
                    />
                    <label className="text-gray-700">¿Promovido?</label>
                </div>

                <div className="col-span-2">
                    <label className="block text-gray-700">Recomendación:</label>
                    <textarea
                        name="recomendacion"
                        value={historial.recomendacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={2}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Historial
            </button>
        </form>
    );
}
