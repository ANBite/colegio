"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function PrerrequisitoGradoForm() {
    const [prerrequisito, setPrerrequisito] = useState({
        grado: "",
        edad_minima_estudiante: ""
    });

    const form = useRef(null);

    const handleChange = (e) => {
        setPrerrequisito({
            ...prerrequisito,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/prerrequisito-grado", prerrequisito);
            alert("Prerrequisito registrado exitosamente");
            form.current.reset();
            setPrerrequisito({
                grado: "",
                edad_minima_estudiante: ""
            });
        } catch (error) {
            console.error("Error al registrar prerrequisito:", error);
            alert("Error al registrar prerrequisito");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px]"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Prerrequisito de Grado</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Grado:</label>
                    <input
                        type="text"
                        name="grado"
                        value={prerrequisito.grado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. Sexto Primaria"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Edad Mínima del Estudiante:</label>
                    <input
                        type="number"
                        name="edad_minima_estudiante"
                        value={prerrequisito.edad_minima_estudiante}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. 11"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Prerrequisito
            </button>
        </form>
    );
}
