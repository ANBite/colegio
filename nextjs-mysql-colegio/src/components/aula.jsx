"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function AulaForm() {
    const [aula, setAula] = useState({
        codigo: "",
        piso: undefined,
        capacidad_maxima: "",
        tipo_de_aula: undefined,
        recursos_disponibles: undefined,
        estado: "",
        horario_disponibilidad: undefined,
        fecha_ultimo_mantenimiento: undefined,
        observaciones: undefined
    });

    const form = useRef(null);

    const handleChange = (e) => {
        setAula({
            ...aula,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/aula", aula);
            alert("Aula registrada exitosamente");
            form.current.reset();
            setAula({
                codigo: "",
                piso: undefined,
                capacidad_maxima: "",
                tipo_de_aula: undefined,
                recursos_disponibles: undefined,
                estado: "",
                horario_disponibilidad: undefined,
                fecha_ultimo_mantenimiento: undefined,
                observaciones: undefined
            });
        } catch (error) {
            console.error("Error al registrar aula:", error);
            alert("Error al registrar aula");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Aula</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Código:</label>
                    <input
                        type="text"
                        name="codigo"
                        value={aula.codigo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. A-101"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Piso:</label>
                    <input
                        type="number"
                        name="piso"
                        value={aula.piso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. 1"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Capacidad Máxima:</label>
                    <input
                        type="number"
                        name="capacidad_maxima"
                        value={aula.capacidad_maxima}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. 30"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Tipo de Aula:</label>
                    <input
                        type="text"
                        name="tipo_de_aula"
                        value={aula.tipo_de_aula}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. Laboratorio, Teórica"
                    />
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Recursos Disponibles:</label>
                    <textarea
                        name="recursos_disponibles"
                        value={aula.recursos_disponibles}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. Proyector, computadoras, pizarra..."
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Estado:</label>
                    <select
                        name="estado"
                        value={aula.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione...</option>
                        <option value="Disponible">Disponible</option>
                        <option value="En Mantenimiento">En Mantenimiento</option>
                        <option value="Ocupada">Ocupada</option>
                        <option value="Fuera de Servicio">Fuera de Servicio</option>
                    </select>
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Horario de Disponibilidad:</label>
                    <textarea
                        name="horario_disponibilidad"
                        value={aula.horario_disponibilidad}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ej. Lunes a Viernes, 08:00 - 17:00"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Último Mantenimiento:</label>
                    <input
                        type="date"
                        name="fecha_ultimo_mantenimiento"
                        value={aula.fecha_ultimo_mantenimiento}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4 col-span-3">
                    <label className="block text-gray-700">Observaciones:</label>
                    <textarea
                        name="observaciones"
                        value={aula.observaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Notas adicionales sobre el aula..."
                    ></textarea>
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Aula
            </button>
        </form>
    );
}
