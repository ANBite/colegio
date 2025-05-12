"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function TipoDocumentoEstudianteForm() {
    const [documento, setDocumento] = useState({
        nombre: "",
        descripcion: "",
        obligatorio: false,
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDocumento({
            ...documento,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/tipo-de-documento-estudiante", documento);
            alert("Tipo de documento registrado exitosamente");
            form.current.reset();
            setDocumento({
                nombre: "",
                descripcion: "",
                obligatorio: false,
            });
        } catch (error) {
            console.error("Error al registrar tipo de documento:", error);
            alert("Error al registrar tipo de documento");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Tipo de Documento Estudiante</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={documento.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. Partida de nacimiento"
                    />
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={documento.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Descripción del documento requerido"
                    ></textarea>
                </div>

                <div className="mb-4 col-span-2 flex items-center">
                    <input
                        type="checkbox"
                        name="obligatorio"
                        checked={documento.obligatorio}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label className="text-gray-700">¿Es obligatorio?</label>
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Documento
            </button>
        </form>
    );
}
