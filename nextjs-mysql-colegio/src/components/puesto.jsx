"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function PuestoForm() {
    const [puesto, setPuesto] = useState({
        nombre: "",
        descripcion: "",
        departamento_id: "",
    });

    const [departamentos, setDepartamentos] = useState([]);

    const form = useRef(null);

    useEffect(() => {
        // Cargar los departamentos disponibles desde la API
        const fetchDepartamentos = async () => {
            try {
                const res = await axios.get("/api/departamento");
                setDepartamentos(res.data); // Suponiendo que la respuesta es un array de departamentos
            } catch (error) {
                console.error("Error al cargar los departamentos:", error);
            }
        };

        fetchDepartamentos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPuesto({
            ...puesto,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/puesto", puesto);
            alert("Puesto registrado exitosamente");
            form.current.reset();
            setPuesto({
                nombre: "",
                descripcion: "",
                departamento_id: "",
            });
        } catch (error) {
            console.error("Error al registrar puesto:", error);
            alert("Error al registrar puesto");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Puesto</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={puesto.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Nombre del puesto"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Descripción:</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={puesto.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Descripción del puesto"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Departamento:</label>
                    <input
                        name="departamento_id"
                        value={puesto.departamento_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="ID del departamento"
                    
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Puesto
            </button>
        </form>
    );
}
