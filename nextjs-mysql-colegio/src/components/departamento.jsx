"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function DepartamentoForm() {
    const [departamento, setDepartamento] = useState({
        nombre: "",
        descripcion: ""
    });

    const form = useRef(null);

    const handleChange = (e) => {
        setDepartamento({
            ...departamento,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/departamento", departamento);
            alert("Departamento registrado exitosamente");
            form.current.reset();
            setDepartamento({
                nombre: "",
                descripcion: ""
            });
        } catch (error) {
            console.error("Error al registrar departamento:", error);
            alert("Error al registrar departamento");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Departamento</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={departamento.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. Departamento de Ciencias"
                    />
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={departamento.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Descripción del departamento"
                    ></textarea>
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Departamento
            </button>
        </form>
    );
}
