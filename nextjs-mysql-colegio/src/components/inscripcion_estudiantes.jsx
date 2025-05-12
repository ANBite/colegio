"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function InscripcionEstudiantesForm() {
    const [inscripcion, setInscripcion] = useState({
        estudiante_id: "",
        id_seccion: "",
        fecha_de_inscripcion: undefined,
        estado: undefined,
        pago_de_inscripcion: undefined,
        observaciones: undefined,
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInscripcion({ ...inscripcion, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/inscripcion_estudiantes", inscripcion);
            alert("Inscripción registrada exitosamente");
            form.current.reset();
            setInscripcion({
                estudiante_id: "",
                id_seccion: "",
                fecha_de_inscripcion: undefined,
                estado: undefined,
                pago_de_inscripcion: undefined,
                observaciones: undefined,
            });
        } catch (error) {
            console.error("Error al registrar inscripción:", error);
            alert("Error al registrar inscripción");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Inscripción de Estudiantes</h2>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">ID del estudiante:</label>
                    <input
                        type="number"
                        name="estudiante_id"
                        value={inscripcion.estudiante_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">ID de la sección:</label>
                    <input
                        type="number"
                        name="id_seccion"
                        value={inscripcion.id_seccion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Fecha de inscripción:</label>
                    <input
                        type="date"
                        name="fecha_de_inscripcion"
                        value={inscripcion.fecha_de_inscripcion}
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
                        value={inscripcion.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Pago de inscripción:</label>
                    <input
                        type="number"
                        name="pago_de_inscripcion"
                        value={inscripcion.pago_de_inscripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="col-span-2">
                    <label className="block text-gray-700">Observaciones:</label>
                    <textarea
                        name="observaciones"
                        value={inscripcion.observaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={3}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Inscripción
            </button>
        </form>
    );
}
