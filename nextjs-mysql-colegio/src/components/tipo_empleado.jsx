"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function TipoDeEmpleadoForm() {
    const [empleado, setEmpleado] = useState({
        descripcion: "",
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpleado({
            ...empleado,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/tipo-de-empleado", empleado);
            alert("Tipo de empleado registrado exitosamente");
            form.current.reset();
            setEmpleado({
                descripcion: "",
            });
        } catch (error) {
            console.error("Error al registrar tipo de empleado:", error);
            alert("Error al registrar tipo de empleado");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Tipo de Empleado</h2>

            <div className="grid grid-cols-1 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Descripción:</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={empleado.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Descripción del tipo de empleado"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Tipo de Empleado
            </button>
        </form>
    );
}
