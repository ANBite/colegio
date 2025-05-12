"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function CursoForm() {
    const [curso, setCurso] = useState({
        nombre: "",
        descripcion: "",
        horas_asignadas: "",
        estado: "",
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurso({ ...curso, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/curso", curso);
            alert("Curso registrado exitosamente");
            form.current.reset();
            setCurso({
                nombre: "",
                descripcion: "",
                horas_asignadas: "",
                estado: "",
            });
        } catch (error) {
            console.error("Error al registrar curso:", error);
            alert("Error al registrar curso");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Curso</h2>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">Nombre del curso:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={curso.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Horas asignadas:</label>
                    <input
                        type="number"
                        name="horas_asignadas"
                        value={curso.horas_asignadas}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="col-span-2">
                    <label className="block text-gray-700">Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={curso.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={3}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={curso.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Curso
            </button>
        </form>
    );
}
