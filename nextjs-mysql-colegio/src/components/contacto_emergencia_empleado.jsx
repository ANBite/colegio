"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function ContactoEmergenciaEmpleadoForm() {
    const [contacto, setContacto] = useState({
        nombre: "",
        numero: "",
        parentesco: ""
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContacto({
            ...contacto,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/contacto-de-emergencia-empleado", contacto);
            alert("Contacto de emergencia registrado exitosamente");
            form.current.reset();
            setContacto({
                nombre: "",
                numero: "",
                parentesco: ""
            });
        } catch (error) {
            console.error("Error al registrar contacto de emergencia:", error);
            alert("Error al registrar contacto de emergencia");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Contacto de Emergencia Empleado</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={contacto.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Nombre del contacto"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Número:</label>
                    <input
                        type="text"
                        name="numero"
                        value={contacto.numero}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Número de teléfono"
                    />
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Parentesco:</label>
                    <input
                        type="text"
                        name="parentesco"
                        value={contacto.parentesco}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. Esposo/a, Hermano/a, Amigo/a"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Contacto
            </button>
        </form>
    );
}
