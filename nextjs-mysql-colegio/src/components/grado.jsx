"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function GradoForm() {
    const [grado, setGrado] = useState({
        nombre_grado: "",
        prerequisito_grado_id: undefined,
        descripcion: undefined,
    });

    const [prerequisitos, setPrerequisitos] = useState([]);
    const form = useRef(null);

    useEffect(() => {
        const fetchPrerequisitos = async () => {
            try {
                const res = await axios.get("/api/prerrequisito_grado");
                setPrerequisitos(res.data);
            } catch (error) {
                console.error("Error al cargar prerrequisitos:", error);
            }
        };
        fetchPrerequisitos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGrado({ ...grado, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/grado", grado);
            alert("Grado registrado exitosamente");
            form.current.reset();
            setGrado({
                nombre_grado: "",
                prerequisito_grado_id: undefined,
                descripcion: undefined,
            });
        } catch (error) {
            console.error("Error al registrar grado:", error);
            alert("Error al registrar grado");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Grado</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre del Grado:</label>
                    <input
                        type="text"
                        name="nombre_grado"
                        value={grado.nombre_grado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Prerrequisito:</label>
                    <input
                        name="prerequisito_grado_id"
                        value={grado.prerequisito_grado_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Prerrequisito ID"
                    />
                </div>

                <div className="col-span-2 mb-4">
                    <label className="block text-gray-700">Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={grado.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={4}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Grado
            </button>
        </form>
    );
}
