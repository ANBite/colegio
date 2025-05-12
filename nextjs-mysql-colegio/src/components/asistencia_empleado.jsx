"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function AsistenciaEmpleadoForm() {
    const [asistenciaEmpleado, setAsistenciaEmpleado] = useState({
        empleado_id: "",
        fecha: "",
        estado: "",
        observaciones: "",
        hora_registro: "",
        justificacion: "",
        documento_justificacion: "",
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
        setAsistenciaEmpleado({
            ...asistenciaEmpleado,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/asistencia-empleado", asistenciaEmpleado);
            alert("Asistencia registrada exitosamente");
            form.current.reset();
            setAsistenciaEmpleado({
                empleado_id: "",
                fecha: "",
                estado: "",
                observaciones: "",
                hora_registro: "",
                justificacion: "",
                documento_justificacion: "",
            });
        } catch (error) {
            console.error("Error al registrar asistencia:", error);
            alert("Error al registrar asistencia");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Asistencia de Empleado</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Empleado:</label>
                    <select
                        name="empleado_id"
                        value={asistenciaEmpleado.empleado_id}
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
                    <label className="block text-gray-700">Fecha:</label>
                    <input
                        type="date"
                        name="fecha"
                        value={asistenciaEmpleado.fecha}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={asistenciaEmpleado.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Observaciones:</label>
                    <textarea
                        name="observaciones"
                        value={asistenciaEmpleado.observaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Hora de Registro:</label>
                    <input
                        type="time"
                        name="hora_registro"
                        value={asistenciaEmpleado.hora_registro}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Justificación:</label>
                    <textarea
                        name="justificacion"
                        value={asistenciaEmpleado.justificacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Documento de Justificación:</label>
                    <input
                        type="file"
                        name="documento_justificacion"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Asistencia
            </button>
        </form>
    );
}
