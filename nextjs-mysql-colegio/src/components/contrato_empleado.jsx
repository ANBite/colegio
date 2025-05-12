"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function ContratoEmpleadoForm() {
    const [contratoEmpleado, setContratoEmpleado] = useState({
        empleado_id: "",
        tipo_contrato: "",
        fecha_inicio: "",
        fecha_fin: undefined,
        salario_mensual: "",
        estado: "",
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
        setContratoEmpleado({
            ...contratoEmpleado,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/contrato-empleado", contratoEmpleado);
            alert("Contrato registrado exitosamente");
            form.current.reset();
            setContratoEmpleado({
                empleado_id: "",
                tipo_contrato: "",
                fecha_inicio: "",
                fecha_fin: undefined,
                salario_mensual: "",
                estado: "",
            });
        } catch (error) {
            console.error("Error al registrar contrato:", error);
            alert("Error al registrar contrato");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Contrato de Empleado</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Empleado:</label>
                    <input
                        name="empleado_id"
                        value={contratoEmpleado.empleado_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="ID empleado"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Tipo de Contrato:</label>
                    <input
                        type="text"
                        name="tipo_contrato"
                        value={contratoEmpleado.tipo_contrato}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha de Inicio:</label>
                    <input
                        type="date"
                        name="fecha_inicio"
                        value={contratoEmpleado.fecha_inicio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha de Fin:</label>
                    <input
                        type="date"
                        name="fecha_fin"
                        value={contratoEmpleado.fecha_fin}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Salario Mensual:</label>
                    <input
                        type="number"
                        step="0.01"
                        name="salario_mensual"
                        value={contratoEmpleado.salario_mensual}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={contratoEmpleado.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Contrato
            </button>
        </form>
    );
}
