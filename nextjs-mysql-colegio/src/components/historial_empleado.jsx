"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function HistorialEmpleadoForm() {
    const [historialEmpleado, setHistorialEmpleado] = useState({
        empleado_id: "",
        fecha_de_registro: "",
        accion_realizada: "",
        descripcion: "",
        usuario_registro: "",
        observaciones: "",
    });

    const [empleados, setEmpleados] = useState([]);
    const form = useRef(null);

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const res = await axios.get("/api/empleado");
                setEmpleados(res.data);
            } catch (error) {
                console.error("Error al cargar empleados:", error);
            }
        };

        fetchEmpleados();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHistorialEmpleado({
            ...historialEmpleado,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/historial-empleado", historialEmpleado);
            alert("Historial registrado exitosamente");
            form.current.reset();
            setHistorialEmpleado({
                empleado_id: "",
                fecha_de_registro: "",
                accion_realizada: "",
                descripcion: "",
                usuario_registro: "",
                observaciones: "",
            });
        } catch (error) {
            console.error("Error al registrar historial:", error);
            alert("Error al registrar historial");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Historial de Empleado</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Empleado:</label>
                    <select
                        name="empleado_id"
                        value={historialEmpleado.empleado_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione un empleado...</option>
                        {empleados.map((empleado) => (
                            <option key={empleado.empleado_id} value={empleado.empleado_id}>
                                {empleado.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha de Registro:</label>
                    <input
                        type="date"
                        name="fecha_de_registro"
                        value={historialEmpleado.fecha_de_registro}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Acción Realizada:</label>
                    <input
                        type="text"
                        name="accion_realizada"
                        value={historialEmpleado.accion_realizada}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={historialEmpleado.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Usuario Registro:</label>
                    <input
                        type="text"
                        name="usuario_registro"
                        value={historialEmpleado.usuario_registro}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Observaciones:</label>
                    <textarea
                        name="observaciones"
                        value={historialEmpleado.observaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Historial
            </button>
        </form>
    );
}
